let songList =  require('../data.js').filter(item => item.type === 'MP3')
export default {
  state: {
    songList: songList,
    curSong: songList[0]
  }
}
