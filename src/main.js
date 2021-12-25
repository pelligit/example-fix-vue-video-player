import Vue from 'vue'
import App from './App.vue'

import '@vant/touch-emulator';

// import VideoPlayer from './vue-video-player'; // 源码
import VideoPlayer from 'vue-video-player'; // 源码
import VideoPlayerModify from './vue-video-player-modify'; // 修改后的组件

import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';


Vue.config.productionTip = false

Vue.use(VideoPlayer); // 应用源组件
Vue.use(VideoPlayerModify); // 应用修改后的组件

new Vue({
  render: h => h(App),
}).$mount('#app')
