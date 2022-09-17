import storage from 'good-storage'

// 搜索历史
const SEARCH_KEY = '_search_'
const SEARCH_MAX_LENGTH = 15

// 歌曲播放历史
const PLAY_KEY = '_play_'
const PLAY_MAX_LENGTH = 200

// 我喜欢的歌曲
const FAVORITE_KEY = '_favorite_'
const FAVORITE_MAX_LENGTH = 200

// arr是整个播放历史数组，val是一首歌，compare是一个比较函数
function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  // 如果是第一条数据
  if (index === 0) {
    return
  }
  // 如果原数组存在该歌曲，则删除，然后在数组的最开始插入  方法arr.unshift
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  // 如果数组已经超出最大值，就把数组的最后一个元素pop出去
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

// 删除搜索历史中的一首歌
function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

// query是一首歌，存储搜索历史
export function saveSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)
  storage.set(SEARCH_KEY, searches)
  return searches
}

// 从本地缓存读取搜索历史列表
export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}

// 删除历史记录一首歌
export function deleteSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  deleteFromArray(searches, (item) => {
    return item === query
  })
  storage.set(SEARCH_KEY, searches)
  return searches
}

// 删除全部搜索历史记录
export function clearSearch() {
  storage.remove(SEARCH_KEY)
  return []
}

// 存储播放历史
export function savePlay(song) {
  let songs = storage.get(PLAY_KEY, [])
  insertArray(songs, song, (item) => {
    return item.id === song.id
  }, PLAY_MAX_LENGTH)
  storage.set(PLAY_KEY, songs)
  return songs
}

// 从本地缓存读取搜索历史列表
export function loadPlay() {
  return storage.get(PLAY_KEY, [])
}

// 存储我喜欢的歌曲
export function saveFavorite(song) {
  let songs = storage.get(FAVORITE_KEY, [])
  insertArray(songs, song, (item) => {
    return item.id === song.id
  }, FAVORITE_MAX_LENGTH)
  storage.set(FAVORITE_KEY, songs)
  return songs
}

// 删除我喜欢的歌曲一首歌
export function deleteFavorite(song) {
  let songs = storage.get(FAVORITE_KEY, [])
  deleteFromArray(songs, (item) => {
    return item.id === song.id
  })
  storage.set(FAVORITE_KEY, songs)
  return songs
}

// 从本地缓存读取我喜欢歌曲列表
export function loadFavorite() {
  return storage.get(FAVORITE_KEY, [])
}
