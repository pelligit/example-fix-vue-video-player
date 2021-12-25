<template>
  <div>
    <div @click="onContentClick($event, 'source-code')">
      <video-player
        :options="playerOptions"

        @click="onPlayer_click($event)"
        @mousedown="onPlayer_mousedown($event)"
        @mouseup="onPlayer_mouseup($event)"
        @mousemove="onPlayer_mousemove($event)"
        @touchstart="onPlayer_touchstart($event)"
        @touchend="onPlayer_touchend($event)"
        @touchmove="onPlayer_touchmove($event)"
      ></video-player>
    </div>
    
    <div class="vertical-block-placeholer"></div>

    <div @click="onContentClick($event, 'modified')">
      <video-player-modify
        :options="playerOptions"

        @click="onPlayer_click($event)"
        @mousedown="onPlayer_mousedown($event)"
        @mouseup="onPlayer_mouseup($event)"
        @mousemove="onPlayer_mousemove($event)"
        @touchstart="onPlayer_touchstart($event)"
        @touchend="onPlayer_touchend($event)"
        @touchmove="onPlayer_touchmove($event)"
      ></video-player-modify>
    </div>
  </div>
</template>

<script>
  import videosrouce from './test-video.mp4'

export default {
  props: {
    src: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {
    playerOptions: function () {
      let options = {
        // controls: false,
        controlBar: {
          fullscreenToggle: true,
          volumePanel: false,
          currentTimeDisplay: false,
          timeDivider: false,
          durationDisplay: false,
          progressControl: false,
          liveDisplay: false,
          seekToLive: false,
          remainingTimeDisplay: false,
          customControlSpacer: false,
          playbackRateMenuButton: false,
          chaptersButton: false,
          descriptionsButton: false,
          subsCapsButton: false,
          audioTrackButton: false
        },
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/' + 'mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            // src: this.src, // url地址
            src: videosrouce
          }
        ],
        poster: '', // 你的封面地址
        width: document.documentElement.clientWidth, // 播放器宽度
        height: '100%',
        notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      };

      // const isPc = this.$store.getters.mainBodyWidth > 1199;
      // if (isPc === false) {
      //   options.controlBar = false;
      // }
      return options;
    }
  },
  methods: {
    fullScreen() {
      const player = this.$refs.videoPlayer.player;
      // player.requestFullscreen(); // 调用全屏api方法
      // player.isFullscreen(true);
      player.play();
    },
    onPlayerPlay(event) {
      console.log(event.nativeEvent, 'onPlayerPlay--->>>>>>>>>', event.nativeEvent.type);

      this.fullScreen();
    },
    onPlayerPause(player) {
      console.log(player.nativeEvent, 'onPlayerPause');
      // player.pause();
    },
    onPlayerClick(player){
      console.log(player.nativeEvent, 'onPlayerClick');

      // player.nativeEvent.stopPropagation();
    },


    onPlayer_click(data){
      console.log('onPlayer_click:');
      const event = data.nativeEvent;
      event.stopPropagation();
    },
    onPlayer_mousedown(data){
      console.log('onPlayer_mousedown:');
      const event = data.nativeEvent;
      event.stopPropagation();
    },
    onPlayer_mouseup(data){
      console.log('onPlayer_mouseup:');
      const event = data.nativeEvent;
      event.stopPropagation();
    },
    onPlayer_mousemove(data){
      console.log('onPlayer_mousemove:');
      const event = data.nativeEvent;
      event.stopPropagation();
    },
    onPlayer_touchstart(data){
      console.log('onPlayer_touchstart:');
      const event = data.nativeEvent;
      event.stopPropagation();
    },
    onPlayer_touchend(data){
      console.log('onPlayer_touchend:');
      const event = data.nativeEvent;
      event.stopPropagation();
    },
    onPlayer_touchmove(data){
      console.log('onPlayer_touchmove:');
      const event = data.nativeEvent;
      event.stopPropagation();
    },

    onStatechanged(){
      // console.log(data, 'onStatechanged::');
    },


    onContentClick(e, msg){
      alert(msg);
    }
  }
};
</script>

<style type="text/css" scoped>
  .vertical-block-placeholer{
    height: 100px;
  }
</style>

