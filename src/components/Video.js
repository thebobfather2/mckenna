import React from "react";
import PropTypes from "prop-types";
import HLSPlayer from "../../node_modules/hls.js/dist/hls";
import DashJS from "dashjs";
import URI from "urijs";
import Mux from "mux-embed";
import {inject, observer} from "mobx-react";
import {Action} from "elv-components-js";
import JsonTextArea from "elv-components-js/src/components/JsonInput";

@inject("root")
@inject("video")
@inject("metrics")
@observer
class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialTime: undefined,
      video: undefined,
      videoVersion: 1,
      bandwidthEstimate: 0,
      hlsOptions: JSON.stringify({
        maxBufferLength: 30,
        maxBufferSize: 300
      }, null, 2)
    };

    this.InitializeVideo = this.InitializeVideo.bind(this);
    this.StartSampling = this.StartSampling.bind(this);
    this.StopSampling = this.StopSampling.bind(this);
  }

  componentDidMount() {
    this.props.metrics.Reset();
  }

  componentWillUnmount(){
    this.StopSampling();
    this.DestroyPlayer();
  }

  DestroyPlayer() {
    if(this.bandwidthInterval) {
      clearInterval(this.bandwidthInterval);
      this.bandwidthInterval = undefined;
    }

    if(this.player) {
      this.player.destroy ? this.player.destroy() : this.player.reset();
    }
  }

  HLSOptionsForm() {
    if(!this.props.root.devMode || this.props.video.protocol !== "hls") {
      return;
    }

    return (
      <React.Fragment>
        <div className="hls-bandwidth-estimate">
          <label>Bandwidth Estimate:</label>
          <span>{(this.state.bandwidthEstimate / 1000).toFixed(1)} Kbps</span>
        </div>
        <div className="hls-options-form">
          <label>HLS Options</label>
          <JsonTextArea
            name="hlsOptions"
            value={this.state.hlsOptions}
            onChange={event => this.setState({hlsOptions: event.target.value})}
          />
          <Action onClick={() => {
            this.DestroyPlayer();
            this.setState({videoVersion: this.state.videoVersion + 1});
            this.props.metrics.Reset();
          }}>Reload</Action>
        </div>
      </React.Fragment>
    );
  }

  InitializeVideo(video) {
    if(!video) { return; }

    this.DestroyPlayer();

    const playoutOptions = this.props.video.playoutOptions[this.props.video.protocol].playoutMethods[this.props.video.drm];

    // Media extensions API not supported - set up native HLS playback and skip monitoring
    if(!this.props.video.hlsjsSupported) {
      video.src = playoutOptions.playoutUrl;
      this.InitializeMuxMonitoring(video, undefined, playoutOptions.playoutUrl);

      return;
    }

    this.props.video.protocol === "hls" ?
      this.InitializeHLS(video, playoutOptions.playoutUrl) :
      this.InitializeDash(video, playoutOptions.playoutUrl, playoutOptions.drms);

    this.InitializeMuxMonitoring(video, playoutOptions.playoutUrl);

    this.setState({
      initialTime: performance.now(),
      video
    }, this.StartSampling);

    video.addEventListener("ended", () => {
      // Stop sampling when video has ended
      this.StopSampling();

      if(this.props.onMediaEnded) {
        this.props.onMediaEnded();
      }
    });
  }

  InitializeHLS(video, playoutUrl) {
    const options = JSON.parse(this.state.hlsOptions);
    this.player = new HLSPlayer(options);

    if(this.props.root.devMode) {
      this.bandwidthInterval = setInterval(
        () => this.setState({bandwidthEstimate: this.player.bandwidthEstimate}),
        1000
      );
    }

    this.player.loadSource(playoutUrl);
    this.player.attachMedia(video);

    this.player.on(HLSPlayer.Events.FRAG_LOADED, (_, {frag, stats}) => {
      if(frag.type !== "main" || frag.sn === "initSegment") { return; }

      const level = this.player.levels[frag.level];
      const bitrate = level.bitrate / 1000;
      const resolution = level.attrs.RESOLUTION;

      // Megabytes
      const size = stats.total / (1024 * 1024);

      // Milliseconds
      const latency = stats.tfirst - stats.trequest;
      const downloadTime = stats.tload - stats.tfirst;

      // Megabits per second
      const downloadRate = (8 * stats.total) / (downloadTime / 1000) / 1000000;
      const fullDownloadRate = (8 * stats.total) / ((downloadTime + latency) / 1000) / 1000000;

      this.props.metrics.LogSegment({
        id: frag.sn.toString(),
        quality: `${resolution} (${bitrate} Kbps)`,
        size,
        duration: frag.duration,
        latency,
        downloadTime,
        downloadRate,
        fullDownloadRate
      });
    });
  }

  InitializeDash(video, playoutUrl, widevineOptions) {
    this.player = DashJS.MediaPlayer().create();

    if(this.props.video.drm === "widevine") {
      const widevineUrl = widevineOptions.widevine.licenseServers[0];

      this.player.setProtectionData({
        "com.widevine.alpha": {
          "serverURL": widevineUrl,
          "httpRequestHeaders": {
            "Authorization": `Bearer ${this.props.video.authToken}`
          },
          "withCredentials": false
        }
      });
    }

    // Subtitles are enabled by default - disable them
    this.player.on(
      DashJS.MediaPlayer.events.CAN_PLAY,
      () => this.player.setTextTrack(-1)
    );

    this.player.on(
      DashJS.MediaPlayer.events.FRAGMENT_LOADING_COMPLETED,
      ({request, response}) => {
        if(request.mediaType !== "video" || !request.index) { return; }

        const quality = this.player.getBitrateInfoListFor("video")[request.quality];
        const bitrate = quality.bitrate / 1000;
        const resolution = `${quality.width}x${quality.height}`;

        // Megabytes
        const size = response.byteLength / (1024 * 1024);

        // Milliseconds
        const latency = request.firstByteDate - request.requestStartDate;
        const downloadTime = request.requestEndDate - request.firstByteDate;

        // Megabits per second
        const downloadRate = (8 * response.byteLength) / (downloadTime / 1000) / 1000000;
        const fullDownloadRate = (8 * response.byteLength) / ((downloadTime + latency) / 1000) / 1000000;

        this.props.metrics.LogSegment({
          id: request.index.toString(),
          quality: `${resolution} (${bitrate} kbps)`,
          size,
          duration: request.duration,
          latency,
          downloadTime,
          downloadRate,
          fullDownloadRate
        });
      }
    );

    this.player.initialize(video, playoutUrl);
  }

  InitializeMuxMonitoring(video, playoutUrl) {
    const options = {
      debug: false,
      data: {
        env_key: "2i5480sms8vdgj0sv9bv6lpk5",
        video_id: this.props.video.contentId,
        video_title: this.props.video.metadata.name,
        video_cdn: URI(playoutUrl).hostname()
      }
    };

    if(this.player) {
      if (this.props.video.protocol === "hls") {
        options.hlsjs = this.player;
        options.Hls = HLSPlayer;
        options.data.player_name = "stream-sample-hls";
      } else if (this.props.video.protocol === "dash") {
        options.dashjs = this.player;
        options.data.player_name = "stream-sample-dash";
      }
    }

    try {
      Mux.monitor(video, options);
    } catch(error) {
      // eslint-disable-next-line no-console
      console.error("Failed to initialize mux monitoring:");
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  StopSampling() {
    clearInterval(this.metricsInterval);
    this.metricsInterval = undefined;
  }

  StartSampling() {
    const samplePeriod = 250;

    this.metricsInterval = setInterval(() => {
      //this.TrimSamples();

      // Determine buffer level relative to the current video time
      const buffer = this.state.video.buffered;
      const buffered = [...Array(buffer.length).keys()]
        .reduce((total, _, i) => total + (Math.max(0, buffer.end(i) - this.state.video.currentTime)), 0);

      const currentTime = (performance.now() - this.state.initialTime) / 1000;

      this.props.metrics.LogBuffer({currentTime, buffered});
    }, samplePeriod);
  }

  Header() {
    const selectedOption = this.props.video.availableContent
      .find(content => content.versionHash === this.props.video.contentId);

    if(selectedOption) {
      if(selectedOption.subHeader) {
        return (
          <div className="header-with-subheader">
            <h1>{selectedOption.header}</h1>
            <h3>{selectedOption.subHeader}</h3>
          </div>
        );
      } else {
        return <h1>{selectedOption.header}</h1>;
      }
    } else {
      return <h1>{this.props.video.metadata.name}</h1>;
    }
  }

  render() {
    return (
      <div className="video-container" key={`video-version-${this.state.videoVersion}`}>
        { this.Header() }
        <video
          poster={this.props.video.posterUrl}
          crossOrigin="anonymous"
          ref={this.InitializeVideo}
          playsInline
          controls
        />
        { this.HLSOptionsForm() }
      </div>
    );
  }
}

Video.propTypes = {
  onMediaEnded: PropTypes.func
};

export default Video;
