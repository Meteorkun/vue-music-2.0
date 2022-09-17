import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

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
  currentIndex: -1,
  // 推荐歌单
  disc: {},
  // 歌曲榜单
  topList: {},
  // 搜索历史
  searchHistory: loadSearch(),
  // 播放历史
  playHistory: loadPlay(),
  // 我喜欢的
  favoriteList: loadFavorite()
}

export default state
