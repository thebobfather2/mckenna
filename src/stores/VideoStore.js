import {observable, action, flow} from "mobx";
import HLSPlayer from "hls.js/dist/hls";

class VideoStore {
  @observable loading = false;
  @observable error;

  @observable hlsjsSupported = HLSPlayer.isSupported();
  @observable contentId;
  @observable posterUrl;
  @observable playoutOptions;
  @observable title;
  @observable bandwidthEstimate = 0;

  @observable protocol = "hls";
  @observable drm = "aes-128";

  constructor(rootStore) {
    this.rootStore = rootStore;

    this.displayMap = {
      "aes-128": "AES-128",
      "clear": "Clear",
      "dash": "Dash",
      "hls": "HLS",
      "widevine": "Widevine"
    };
  }

  @action.bound
  Reset() {
    this.playoutOptions = undefined;
    this.posterUrl = "";
    this.title = "";
    this.contentId = "";
    this.bandwidthEstimate = 0;
    this.error = "";
  }

  @action.bound
  SetBandwidthEstimate(estimate) {
    this.bandwidthEstimate = estimate;
  }

  @action.bound
  SetProtocol(protocol) {
    this.protocol = protocol;

    if(this.playoutOptions) {
      // Prefer DRM
      const playoutMethods = this.playoutOptions[this.protocol].playoutMethods;
      this.drm = playoutMethods["aes-128"] ? "aes-128" : (playoutMethods.widevine ? "widevine" : "clear");
    } else if(this.drm !== "clear") {
      this.drm = this.protocol === "hls" ? "aes-128" : "widevine";
    }
  }

  @action.bound
  SetDRM(drm) {
    this.drm = drm;
  }

  @action.bound
  LoadVideo = flow(function * ({contentId}) {
    this.loading = true;
    this.error = undefined;
    this.contentId = contentId;

    const client = this.rootStore.client;

    try {
      let libraryId, objectId, versionHash;
      if(contentId.startsWith("iq__")) {
        objectId = contentId;
        libraryId = yield client.ContentObjectLibraryId({objectId});
      } else if(contentId.startsWith("hq")) {
        versionHash = contentId;
      } else {
        this.Reset();
        this.error = `Invalid content ID: ${contentId}`;
        return;
      }

      this.title =
        (yield client.ContentObjectMetadata({
          libraryId,
          objectId,
          versionHash,
          metadataSubtree: "public/asset_metadata/display_title"
        })) ||
        (yield client.ContentObjectMetadata({
          libraryId,
          objectId,
          versionHash,
          metadataSubtree: "public/name"
        }));

      yield this.LoadVideoPlayout({libraryId, objectId, versionHash});
    } catch(error) {
      // eslint-disable-next-line no-console
      console.error("Failed to load content:");
      // eslint-disable-next-line no-console
      console.error(error);

      this.Reset();

      this.error = "Failed to load content";
    } finally {
      this.loading = false;
    }
  });

  @action.bound
  LoadVideoPlayout = flow(function * ({libraryId, objectId, versionHash}) {
    this.playoutOptions = yield this.rootStore.client.PlayoutOptions({
      objectId,
      versionHash
    });

    this.posterUrl = yield this.rootStore.client.Rep({
      libraryId,
      objectId,
      versionHash,
      rep: "player_background",
      channelAuth: true
    });

    if(
      !this.playoutOptions[this.protocol] ||
      !this.playoutOptions[this.protocol].playoutMethods[this.drm]
    ) {
      this.protocol = Object.keys(this.playoutOptions)[0] || "hls";

      // Prefer DRM
      const playoutMethods = this.playoutOptions[this.protocol].playoutMethods;
      this.drm = playoutMethods["aes-128"] ? "aes-128" : (playoutMethods.widevine ? "widevine" : "clear");
    }
  });
}

export default VideoStore;
