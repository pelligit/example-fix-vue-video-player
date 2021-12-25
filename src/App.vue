<template>
  <div id="app">
    <div class="video-player-container">
      <video-player></video-player>
    </div>
  </div>
</template>

<script>
import videoPlayer from './vide-play/videoPlayer.vue';

export default {
  name: 'App',
  components: {
    videoPlayer
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.video-player-container{
  width: 40%;
}
</style>
