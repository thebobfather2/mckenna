!function(e){function webpackJsonpCallback(t){for(var r,i,o=t[0],l=t[1],c=t[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);d.length;)d.shift()();return n.push.apply(n,c||[]),checkDeferredModules()}function checkDeferredModules(){for(var e,t=0;t<n.length;t++){for(var r=n[t],i=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(i=!1)}i&&(n.splice(t--,1),e=__webpack_require__(__webpack_require__.s=r[0]))}return e}var t={},a={0:0},n=[];function __webpack_require__(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,a){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(__webpack_require__.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(a,n,function(t){return e[t]}.bind(null,n));return a},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="";var r=window.webpackJsonp=window.webpackJsonp||[],i=r.push.bind(r);r.push=webpackJsonpCallback,r=r.slice();for(var o=0;o<r.length;o++)webpackJsonpCallback(r[o]);var s=i;n.push([1045,1]),checkDeferredModules()}({1045:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),i=a(29),o=a.n(i),s=a(23),l=a.n(s),c=a(24),p=a.n(c),d=a(25),u=a.n(d),m=a(26),h=a.n(m),f=a(27),g=a.n(f),v=(a(452),a(1)),b=a.n(v),y=a(110),x=a(55),w=a(15),S=a.n(w),k=a(0),_=a.n(k),E=a(434),D=function(){var e=o()(r.a.mark(function _callee(e){var t,a,n,i;return r.a.wrap(function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return e||(e="https://main.net955304.contentfabric.io/config"),r.next=3,E.ElvClient.FromConfigurationUrl({configUrl:e,viewOnly:!0});case 3:return t=r.sent,a=t.GenerateWallet(),n=a.GenerateMnemonic(),i=a.AddAccountFromMnemonic({mnemonic:n}),r.next=9,t.SetSigner({signer:i});case 9:return r.abrupt("return",t);case 10:case"end":return r.stop()}},_callee)}));return function InitializeClient(t){return e.apply(this,arguments)}}(),M=function(){var e=o()(r.a.mark(function _callee2(){var e,t;return r.a.wrap(function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:if(e=["aes-128"],"function"==typeof window.navigator.requestMediaKeySystemAccess){a.next=4;break}return console.log("requestMediaKeySystemAccess not available"),a.abrupt("return",e);case 4:return a.prev=4,t=[{initDataTypes:["cenc"],audioCapabilities:[{contentType:'audio/mp4;codecs="mp4a.40.2"'}],videoCapabilities:[{contentType:'video/mp4;codecs="avc1.42E01E"'}]}],a.next=8,navigator.requestMediaKeySystemAccess("com.widevine.alpha",t);case 8:e.push("widevine"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(4),console.log("No Widevine support detected");case 14:return a.abrupt("return",e);case 15:case"end":return a.stop()}},_callee2,null,[[4,11]])}));return function AvailableDRMs(){return e.apply(this,arguments)}}(),z=function(){var e=o()(r.a.mark(function _callee3(e){var t,a,n,i,o,s,l,c,p,d;return r.a.wrap(function _callee3$(r){for(;;)switch(r.prev=r.next){case 0:return t=e.client,a=e.versionHash,n=e.protocol,r.prev=1,i=t.utils.DecodeVersionHash(a),o=i.objectId,r.next=5,t.ContentObjectMetadata({versionHash:a});case 5:return s=r.sent,r.t0=t,r.t1=a,r.t2=[n],r.next=11,M();case 11:return r.t3=r.sent,r.t4={versionHash:r.t1,protocols:r.t2,drms:r.t3},r.next=15,r.t0.PlayoutOptions.call(r.t0,r.t4);case 15:return l=r.sent,c=Object.keys(l[n].drms),r.next=19,t.Rep({versionHash:a,rep:"player_background",channelAuth:!0});case 19:return p=r.sent,r.next=22,t.GenerateStateChannelToken({objectId:o});case 22:return d=r.sent,r.abrupt("return",{metadata:s,playoutOptions:l,availableDRMs:c,posterUrl:p,authToken:d});case 26:throw r.prev=26,r.t5=r.catch(1),console.error("Failed to load content:"),console.error(r.t5),new Error("Failed to load content");case 31:case"end":return r.stop()}},_callee3,null,[[1,26]])}));return function LoadVideo(t){return e.apply(this,arguments)}}(),C=a(83),N=a.n(C),I=a(203),T=a.n(I),j=a(435),L=a(204),P=a.n(L),H=a(197),O=a.n(H),q=a(1053),A=a(1056),R=a(1055),G=a(1054),V=a(1051),F=function(e){function Graph(){return l()(this,Graph),u()(this,h()(Graph).apply(this,arguments))}return g()(Graph,e),p()(Graph,[{key:"render",value:function render(){var e=this,t=Math.max.apply(Math,N()(this.props.data.map(function(e){return e.x})).concat([0])),a=Math.max(0,t-this.props.windowSize);t=a+this.props.windowSize;var n=this.props.data.filter(function(a){return a.x>=t-2*e.props.windowSize}),r=n.length>0?Math.max.apply(Math,N()(n.map(function(e){return e.y}))):1;return r*=1.1,b.a.createElement("div",{className:"graph-container"},b.a.createElement("h3",null,this.props.name),b.a.createElement(q.a,{height:300,padding:{left:50,bottom:50},theme:A.a.material,maxDomain:{x:t,y:r},minDomain:{x:a,y:0}},b.a.createElement(R.a,{label:"Time (s)",axisLabelComponent:b.a.createElement(G.a,{dy:20}),style:{tickLabels:{fill:"gray",fontSize:10},axisLabel:{fill:"gray"}}}),b.a.createElement(R.a,{dependentAxis:!0,style:{tickLabels:{fill:"gray",fontSize:10}}}),b.a.createElement(V.a,{style:{data:{stroke:this.props.color,strokeWidth:1}},data:this.props.data})))}}]),Graph}(b.a.Component);F.propTypes={name:_.a.string,color:_.a.string,data:_.a.arrayOf(_.a.shape({x:_.a.number,y:_.a.number})).isRequired,windowSize:_.a.number};var U=F,B=function(e){function Segments(e){var t;return l()(this,Segments),(t=u()(this,h()(Segments).call(this,e))).state={timingScale:1e3},t.Segment=t.Segment.bind(S()(t)),t}return g()(Segments,e),p()(Segments,[{key:"componentDidUpdate",value:function componentDidUpdate(e){if(this.props.segmentData.length!==e.segmentData.length){var t=Math.max.apply(Math,N()(this.props.segmentData.map(function(e){return 1e3*e.duration})).concat(N()(this.props.segmentData.map(function(e){return e.latency+e.downloadTime}))));this.setState({timingScale:t})}}},{key:"Header",value:function Header(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:"segments-header"},"ID"),b.a.createElement("div",{className:"segments-header"},"Quality"),b.a.createElement("div",{className:"segments-header"},"Size"),b.a.createElement("div",{className:"segments-header"},"Download Rate"),b.a.createElement("div",{className:"segments-header"},"Timing (ms)"))}},{key:"Segment",value:function Segment(e,t){var a=1e3*Math.round(e.duration),n=a/this.state.timingScale*100,r=e.latency/this.state.timingScale*100,i=e.downloadTime/this.state.timingScale*100;return b.a.createElement(b.a.Fragment,{key:"segment-".concat(t)},b.a.createElement("div",null,e.id),b.a.createElement("div",null,e.quality),b.a.createElement("div",null,"".concat(e.size.toFixed(2)," MB")),b.a.createElement("div",null,"".concat(e.downloadRate.toFixed(1)," Mbps")),b.a.createElement("div",{className:"timing"},b.a.createElement("span",{className:"duration",style:{width:"".concat(n,"%")},title:"Segment duration: ".concat(a.toFixed(0))},a.toFixed(0)),b.a.createElement("span",{className:"latency",style:{width:"".concat(r,"%")},title:"Latency: ".concat(e.latency.toFixed(0),"ms")},e.latency.toFixed(0)),b.a.createElement("span",{className:"download",style:{width:"".concat(i,"%")},title:"Download: ".concat(e.downloadTime.toFixed(0),"ms")},e.downloadTime.toFixed(0))))}},{key:"render",value:function render(){return b.a.createElement("div",{className:"segments-container"},b.a.createElement("h3",null,"Segment Metrics"),b.a.createElement("div",{className:"segments"},this.Header(),this.props.segmentData.map(this.Segment)))}}]),Segments}(b.a.Component);B.propTypes={segmentData:_.a.arrayOf(_.a.shape({id:_.a.string,quality:_.a.string,size:_.a.number,duration:_.a.number,latency:_.a.number,downloadTime:_.a.number,downloadRate:_.a.number}))};var Z=B,W=a(446),Q=a.n(W),Y=function(e){function Video(e){var t;return l()(this,Video),(t=u()(this,h()(Video).call(this,e))).state={bufferData:[],segmentData:[],initialTime:void 0,player:void 0,video:void 0},t.InitializeVideo=t.InitializeVideo.bind(S()(t)),t.StartSampling=t.StartSampling.bind(S()(t)),t.StopSampling=t.StopSampling.bind(S()(t)),t}return g()(Video,e),p()(Video,[{key:"componentWillUnmount",value:function componentWillUnmount(){this.StopSampling()}},{key:"componentDidUpdate",value:function componentDidUpdate(e){e.samplePeriod!==this.props.samplePeriod&&(this.StopSampling(),this.StartSampling())}},{key:"InitializeVideo",value:function InitializeVideo(e){if(e){var t=this.props.playoutOptions.playoutUrl,a="hls"===this.props.protocol?this.InitializeHLS(e,t):this.InitializeDash(e,t);this.InitializeMux(a),this.setState({initialTime:performance.now(),player:a,video:e},this.StartSampling),e.addEventListener("ended",this.StopSampling)}}},{key:"InitializeHLS",value:function InitializeHLS(e,t){var a=this;t=O()(t).addSearch("player_profile","hls-js").toString();var n=new T.a;return n.loadSource(t),n.attachMedia(e),n.on(T.a.Events.FRAG_LOADED,function(e,t){var r=t.frag,i=t.stats;if("main"===r.type&&"initSegment"!==r.sn){var o=n.levels[r.level],s=o.bitrate/1e3,l=o.attrs.RESOLUTION,c=i.total/1048576,p=i.tfirst-i.trequest,d=i.tload-i.tfirst,u=8*i.total/(d/1e3)/1e6,m={id:r.sn.toString(),quality:"".concat(l," (").concat(s," Kbps)"),size:c,duration:r.duration,latency:p,downloadTime:d,downloadRate:u};a.setState({segmentData:[m].concat(N()(a.state.segmentData))})}}),n}},{key:"InitializeDash",value:function InitializeDash(e,t){var a=this,n=P.a.MediaPlayer().create();if("widevine"===this.props.drm){var r=this.props.playoutOptions.drms.widevine.licenseServers[0];n.setProtectionData({"com.widevine.alpha":{serverURL:r,httpRequestHeaders:{Authorization:"Bearer ".concat(this.props.authToken)},withCredentials:!1}})}return n.on(P.a.MediaPlayer.events.CAN_PLAY,function(){return n.setTextTrack(-1)}),n.on(P.a.MediaPlayer.events.FRAGMENT_LOADING_COMPLETED,function(e){var t=e.request,r=e.response;if("video"===t.mediaType&&t.index){var i=n.getBitrateInfoListFor("video")[t.quality],o=i.bitrate/1e3,s="".concat(i.width,"x").concat(i.height),l=r.byteLength/1048576,c=t.firstByteDate-t.requestStartDate,p=t.requestEndDate-t.firstByteDate,d=8*r.byteLength/(p/1e3)/1e6,u={id:t.index.toString(),quality:"".concat(s," (").concat(o," kbps)"),size:l,duration:t.duration,latency:c,downloadTime:p,downloadRate:d};a.setState({segmentData:[u].concat(N()(a.state.segmentData))})}}),n.initialize(e,t),n}},{key:"InitializeMux",value:function InitializeMux(e){var t={debug:!1,data:{env_key:"2i5480sms8vdgj0sv9bv6lpk5",video_id:this.props.versionHash,video_title:this.props.metadata.name}};"hls"===this.props.protocol?(t.hlsjs=e,t.Hls=T.a,t.data.player_name="stream-sample-hls"):(t.dashjs=e,t.data.player_name="stream-sample-dash"),Q.a.monitor("video",t)}},{key:"TrimSamples",value:function TrimSamples(){var e=(performance.now()-this.state.initialTime)/1e3-300;this.state.bufferData.length>1320&&this.setState({bufferData:function trim(t){return t.slice(-1200).filter(function(t){return t.x>e})}(this.state.bufferData)})}},{key:"StopSampling",value:function StopSampling(){clearInterval(this.metricsInterval),this.metricsInterval=void 0}},{key:"StartSampling",value:function StartSampling(){var e=this;"hls"===this.props.protocol?this.metricsInterval=setInterval(function(){var t=(performance.now()-e.state.initialTime)/1e3;if(e.state.player.streamController.stats){var a=j.a.bufferInfo(e.state.video,e.state.video.currentTime,0);a.end>=e.state.video.duration||(e.setState({bufferData:e.state.bufferData.concat({x:t,y:a.len||0})}),e.TrimSamples())}},this.props.samplePeriod):this.metricsInterval=setInterval(function(){var t=(performance.now()-e.state.initialTime)/1e3,a=e.state.player.getDashMetrics().getCurrentBufferLevel("video",!0);Math.abs(a-(e.state.video.duration-e.state.video.currentTime))<1||(e.setState({bufferData:e.state.bufferData.concat({x:t,y:a})}),e.TrimSamples())},this.props.samplePeriod)}},{key:"render",value:function render(){return b.a.createElement("div",{className:"video-container"},b.a.createElement("h1",null,this.props.metadata.name),b.a.createElement("video",{poster:this.props.posterUrl,crossOrigin:"anonymous",ref:this.InitializeVideo,muted:!1,autoPlay:!0,controls:!0,preload:"auto"}),b.a.createElement("div",{className:"metrics-container"},b.a.createElement(U,{name:"Buffer Level (s)",data:this.state.bufferData,color:"#00589d",windowSize:this.props.sampleWindow}),b.a.createElement(Z,{segmentData:this.state.segmentData})))}}]),Video}(b.a.Component);Y.propTypes={authToken:_.a.string,drm:_.a.string,metadata:_.a.object,playoutOptions:_.a.object.isRequired,posterUrl:_.a.string,protocol:_.a.string.isRequired,sampleWindow:_.a.number.isRequired,samplePeriod:_.a.number.isRequired,versionHash:_.a.string.isRequired};var J=Y,K=function Format(e){return"hls"===e?"HLS":"aes-128"===e?"AES-128":e.charAt(0).toUpperCase()+e.slice(1)},X={"Stargate Origins Trailer (4K)":"hq__EAt4BVedkShkEJxZX7CTiFvhdg7zpwZdaS2cQua9u4bwehBCyeKeFZT5MDYwUMRDMES94Z44M1","Big Buck Bunny (4K)":"hq__BD1BouHkFraAcDjvoyHoiKpVhf4dXzNsDT5USe8mrZ7YDhLPDoZGnoU32iZvDYiQW8vVi6X7rV"},$=function(e){function Controls(e){var t;return l()(this,Controls),(t=u()(this,h()(Controls).call(this,e))).state={loading:!0,showControls:!1,versionHash:Object.values(X)[0],availableDRMs:[],availableProtocols:["hls","dash"],protocol:"hls",video:void 0,drm:"aes-128",graphScale:20},t.LoadVideo=t.LoadVideo.bind(S()(t)),t}var t,a;return g()(Controls,e),p()(Controls,[{key:"componentDidMount",value:(a=o()(r.a.mark(function _callee(){return r.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.LoadVideo(this.state.protocol);case 2:case"end":return e.stop()}},_callee,this)})),function componentDidMount(){return a.apply(this,arguments)})},{key:"LoadVideo",value:(t=o()(r.a.mark(function _callee2(e){var t,a,n,i,o,s;return r.a.wrap(function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:if(this.state.versionHash){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,this.setState({loading:!0,video:void 0,error:void 0}),r.next=6,z({client:this.props.client,versionHash:this.state.versionHash,protocol:e});case 6:t=r.sent,a=t.metadata,n=t.playoutOptions,i=t.availableDRMs,o=t.posterUrl,s=t.authToken,this.setState({loading:!1,availableDRMs:i,protocol:e,drm:i[0],video:{metadata:a,playoutOptions:n,posterUrl:o,authToken:s}}),r.next=18;break;case 15:r.prev=15,r.t0=r.catch(2),this.setState({error:r.t0,loading:!1});case 18:case"end":return r.stop()}},_callee2,this,[[2,15]])})),function LoadVideo(e){return t.apply(this,arguments)})},{key:"ErrorMessage",value:function ErrorMessage(){return this.state.error?b.a.createElement("div",{className:"error-message"},this.state.error.message):null}},{key:"ProtocolSelection",value:function ProtocolSelection(){var e=this,t=this.state.availableProtocols.map(function(e){return[K(e),e]});return b.a.createElement("div",{className:"selection"},b.a.createElement("label",{htmlFor:"protocol"},"Protocol"),b.a.createElement(x.e,{options:t,selected:this.state.protocol,onChange:function onChange(t){return e.LoadVideo(t)},className:"secondary"}))}},{key:"DrmSelection",value:function DrmSelection(){var e=this,t=this.state.availableDRMs.map(function(e){return[K(e),e]});return b.a.createElement("div",{className:"selection"},b.a.createElement("label",{htmlFor:"drm"},"DRM"),b.a.createElement(x.e,{options:t,selected:this.state.drm,onChange:function onChange(t){return e.setState({drm:t})},className:"secondary"}))}},{key:"ContentSelection",value:function ContentSelection(){var e=this,t=Object.keys(X).map(function(e){return[e,X[e]]});return b.a.createElement("div",{className:"control-block content-selection"},b.a.createElement(x.e,{options:t,selected:this.state.versionHash,onChange:function onChange(t){e.setState({versionHash:t},function(){return e.LoadVideo(e.state.protocol)})},className:"available-content secondary vertical-tabs",tabClassName:"available-content-selection"}),b.a.createElement("input",{type:"text",placeholder:"Version Hash",value:this.state.versionHash,onChange:function onChange(t){return e.setState({versionHash:t.target.value})},onKeyPress:Object(x.f)(function(){return e.LoadVideo(e.state.protocol)})}),b.a.createElement(x.a,{onClick:function onClick(){return e.LoadVideo(e.state.protocol)}},"Load"))}},{key:"GraphScale",value:function GraphScale(){var e=this;return b.a.createElement("div",{className:"selection"},b.a.createElement("label",{htmlFor:"protocol"},"Graph Scale"),b.a.createElement(x.e,{options:[["20s",20],["60s",60],["300s",300]],selected:this.state.graphScale,onChange:function onChange(t){return e.setState({graphScale:t})},className:"secondary"}))}},{key:"StreamOptions",value:function StreamOptions(){if(!this.state.loading&&!this.state.error)return b.a.createElement("div",{className:"control-block"},b.a.createElement("h4",null,"Stream Options"),b.a.createElement("div",{className:"selection-container"},this.ProtocolSelection(),this.DrmSelection(),this.GraphScale()))}},{key:"ControlsSection",value:function ControlsSection(){var e=this;if(this.state.error)return null;var t=b.a.createElement("div",{onClick:function onClick(){return e.setState({showControls:!e.state.showControls})},className:"toggle-controls"},this.state.showControls?"▲ Hide Controls":"▼ Show Controls");return b.a.createElement(b.a.Fragment,null,t,b.a.createElement("div",{className:"controls ".concat(this.state.showControls?"":"hidden")},this.StreamOptions()))}},{key:"Video",value:function Video(){return this.state.loading||this.state.error?null:b.a.createElement(J,{key:"video-".concat(this.state.protocol,"-").concat(this.state.drm),versionHash:this.state.versionHash,authToken:this.state.video.authToken,drm:this.state.drm,metadata:this.state.video.metadata,playoutOptions:this.state.video.playoutOptions[this.state.protocol],posterUrl:this.state.video.posterUrl,protocol:this.state.protocol,sampleWindow:this.state.graphScale,samplePeriod:250})}},{key:"render",value:function render(){return b.a.createElement("div",{className:"controls-container"},this.ContentSelection(),b.a.createElement(x.d,{loading:this.state.loading&&!this.state.error,fullPage:!0},this.ErrorMessage(),this.Video(),this.ControlsSection()))}}]),Controls}(b.a.Component);$.propTypes={client:_.a.object.isRequired};var ee=$,te=a(447),ae=a.n(te),ne=a(448),re=a.n(ne),ie=function(e){function App(e){var t;return l()(this,App),(t=u()(this,h()(App).call(this,e))).state={client:void 0},t}var t;return g()(App,e),p()(App,[{key:"componentDidMount",value:(t=o()(r.a.mark(function _callee(){return r.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.client){e.next=2;break}return e.abrupt("return");case 2:return e.t0=this,e.next=5,D();case 5:e.t1=e.sent,e.t2={client:e.t1},e.t0.setState.call(e.t0,e.t2);case 8:case"end":return e.stop()}},_callee,this)})),function componentDidMount(){return t.apply(this,arguments)})},{key:"SourceLink",value:function SourceLink(){return b.a.createElement("a",{className:"source-link",href:"https://github.com/eluv-io/stream-sample",target:"_blank"},b.a.createElement(x.c,{className:"github-icon",icon:re.a}),"Source available on GitHub")}},{key:"App",value:function App(){return this.state.client?b.a.createElement(ee,{client:this.state.client}):b.a.createElement(x.d,{loading:!0,fullPage:!0})}},{key:"render",value:function render(){return b.a.createElement("div",{className:"app-container"},b.a.createElement("header",null,b.a.createElement(x.b,{href:"https://eluv.io",className:"logo",icon:ae.a,label:"Eluvio"}),b.a.createElement("h1",null,"Video Streaming Sample")),b.a.createElement("main",null,this.App()),b.a.createElement("footer",null,this.SourceLink()))}}]),App}(b.a.Component);Object(y.render)(b.a.createElement(ie,null),document.getElementById("app"))},447:function(e,t,a){e.exports=a.p+"eeafcca569c1513b9c073c2c11b9b74d.png"},448:function(e,t){e.exports='<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>'},452:function(e,t,a){var n=a(453);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(52)(n,r);n.locals&&(e.exports=n.locals)},453:function(e,t,a){(e.exports=a(51)(!1)).push([e.i,'*{box-sizing:border-box}html,body{background-color:#fff;color:#222;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;height:100%;margin:0;padding:0}h1{font-size:28px;font-weight:bold;margin:0}h2{font-size:24px;font-weight:bold;margin:0}h3{font-size:20px;font-weight:normal;margin:0}h3.header-with-loader{align-items:center;display:flex;height:30px;justify-content:space-between}h4{color:#222;font-size:16px;font-weight:normal;margin:8px 0 4px}a{text-decoration:none}a,a:visited{color:#555}a.link{display:block}a.image-link{display:flex}ul{display:flex;list-style-type:none;margin:0;padding:0}ul li{display:inline}select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+") no-repeat 98% 50%;border:1px solid #ccc;border-radius:0;cursor:pointer;font-size:16px;height:32px;padding:0 0 0 4px;width:250px}input{height:32px}input,textarea,pre{border:1px solid #ddd;padding:0 4px}pre{font-family:"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;margin:0;overflow:auto;padding:12px 8px;white-space:pre-wrap;word-wrap:break-word}.-elv-copyable{cursor:pointer}html{font-size:16px}@media screen and (max-width: 1000px){html{font-size:12px}}.app{color:#222;height:100%}.app-container{display:grid;grid-template-columns:100%;grid-template-rows:auto 1fr auto;height:100%;min-height:100%}header{align-items:flex-end;display:flex;padding:8px 16px}header .logo{width:auto}header h1{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#6c6c6c;font-size:1.3rem;font-weight:normal;margin-left:24px}main{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;margin-bottom:32px;width:100%}footer{color:#8c8c8c;display:flex;justify-content:flex-end;padding:16px}.source-link{align-items:center;border:1px solid #aaa;border-radius:3px;display:flex;font-size:0.9rem;padding:8px 16px;width:auto}.source-link .github-icon{height:20px;margin-right:8px;width:20px}.source-link:hover{background-color:#f5f5f5}.error-message{color:#a33;font-size:1.2rem;padding:16px;text-align:center}.controls-container{display:flex;flex-direction:column;height:100%;width:80%}.controls-container .control-block{align-items:center;border:1px solid #ddd;border-radius:3px;display:flex;flex-direction:column;justify-content:center;margin:0 4px 8px;padding:16px 24px 0;width:30rem}.controls-container .control-block>*{margin-bottom:16px}.controls-container h4{font-size:1rem;margin:0 0 16px;text-align:center;width:100%}.controls-container .content-selection{flex-direction:row;flex-wrap:wrap;margin:16px auto 8px;padding-bottom:4px;width:50%}.controls-container .content-selection .available-content{margin-bottom:16px}.controls-container .content-selection input{flex-grow:1;font-size:0.9rem;height:2.2rem;padding:8px}.controls-container .content-selection button{font-size:0.9rem;height:2.2rem;margin-left:8px}.controls-container .selection{align-items:center;display:flex;margin-bottom:8px;width:100%}.controls-container .selection:last-child{margin:0}.controls-container .selection label{font-size:1rem;width:7rem}.controls-container .toggle-controls{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#6c6c6c;cursor:pointer;padding:8px 0;width:12rem}.controls-container .controls{margin-top:16px}.controls-container .controls.hidden{display:none}.video-container{display:flex;flex-direction:column;justify-content:center}.video-container h1{font-size:1.5rem;font-weight:normal;margin:16px 0;text-align:center}.video-container video{background-color:#000;cursor:pointer;max-height:50vh;width:100%}.metrics-container{display:flex;height:300px;justify-content:space-between;margin:16px 0 32px}.metrics-container .graph-container{flex-grow:0;margin:0;padding:0}.metrics-container h3{color:#6c6c6c;font-size:0.95rem;padding-bottom:8px;text-align:center}.metrics-container .segments-container{flex-grow:1;padding:0 0 32px 32px}.metrics-container .segments{border:1px solid #aaa;color:#6c6c6c;display:grid;font-size:0.75rem;grid-auto-rows:2.1rem;grid-template-columns:4rem 1fr 6rem 8rem 2fr;height:100%;margin-top:4px;overflow-y:scroll;width:100%}.metrics-container .segments div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;align-items:center;background-color:#fff;border-top:1px solid #ddd;display:flex;flex-wrap:nowrap;justify-content:flex-start;overflow:hidden;padding-left:8px}.metrics-container .segments .segments-header{border:0;font-weight:600}.metrics-container .segments .timing{border-left:1px solid #eee;font-size:0.6rem;justify-content:flex-start;position:relative}.metrics-container .segments .timing .duration{background-color:#eee;height:75%;padding-right:12px;position:absolute;text-align:right;width:100%}.metrics-container .segments .timing .latency,.metrics-container .segments .timing .download{align-items:center;color:#fff;display:flex;height:50%;justify-content:center;overflow:hidden;text-align:center;z-index:10}.metrics-container .segments .timing .latency{background-color:#003c7e}.metrics-container .segments .timing .download{background-color:#1b73e8}.-elv-tab-container.-elv-tab-container{margin:0}.-elv-tab-container.-elv-tab-container.secondary .-elv-tab{font-size:0.9rem;padding:8px;text-align:center;width:6rem}.-elv-tab-container.-elv-tab-container.secondary .-elv-tab.selected{background:#1b73e8;color:#fff}.-elv-tab-container.-elv-tab-container.vertical-tabs{flex-direction:column;width:100%}.-elv-tab-container.-elv-tab-container.vertical-tabs .-elv-tab{border:1px solid #ddd;width:100%}.-elv-tab-container.-elv-tab-container.vertical-tabs .-elv-tab:not(:last-child){border-bottom:0}@media screen and (max-width: 1000px){.controls-container .content-selection{width:100%}}\n',""])},686:function(e,t){},688:function(e,t){},728:function(e,t){},729:function(e,t){},775:function(e,t){},777:function(e,t){},785:function(e,t){}});