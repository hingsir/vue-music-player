<template>
  <div id="app">
    <div class="song-list">
      <template v-for="(song, index) in shareState.songList">
        <dl @click="playCurSong(song)" :class="{'current': song.src == shareState.curSong.src}">
          <dt>{{shareState.songList.length - index}}</dt>
          <dd>{{song.songname}}</dd>
        </dl>
      </template>
    </div>
    <div class="footer">
      <Player></Player>
    </div>
  </div>
</template>

<script>
import Player from './components/Player.vue'
import store from './store'
export default {
  name: 'app',
  components: {
      Player
  },
  data () {
    return {
      shareState: store.state,
    }
  },
  methods: {
    playCurSong (song){
      this.shareState.curSong = song
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
}
#app{
  position: relative;
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  font: 14px/1.2 'Microsoft Yahei';
}
.song-list{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 80px;
  width: 100%;
  color: #666;
  overflow-y: scroll;
}
dl{
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 0;
}
dl:nth-child(odd){
  background: #f3f3f3;
}
dl.current{
  color: #31c27c;
}
dl dt{
  width: 40px;
  text-align: center;
}
dl dd{
  flex: 1;
}
.footer{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

</style>
