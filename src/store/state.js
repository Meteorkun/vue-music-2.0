import {playMode} from 'common/js/config'

const state = {
  singer: {},
  // 歌曲是否播放
  playing: false,
  // 歌曲是否全屏播放
  fullScreen: false,
  // 歌曲播放列表
  playlist: [],
  // 歌曲顺序播放列表
  sequenceList: [],
  // 歌曲播放模式
  mode: playMode.sequence,
  // 当前歌曲播放索引
  currentIndex: -1
}

export default state
