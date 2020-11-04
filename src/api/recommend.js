import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

// jsonp抓取数据
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

// 获取歌单数据
export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取音乐播放数据
// export function getMusic(mid) {
//   const url = '/api/music'
//
//   const data = Object.assign({}, commonParams, {
//     singermid: mid,
//     filename: 'C400' + mid + '.m4a',
//     guid: 5412366341,
//     platform: 'yqq',
//     loginUin: 0,
//     hostUin: 0,
//     needNewCode: 0,
//     order: 'listen',
//     begin: 0,
//     num: 100,
//     songstatus: 1,
//     uin: 0
//   })
//
//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }

// 获取音乐播放数据方法2
// var prefixHost = require('../../config/host')
export function getPlaySongVkey(songmid) {
  const url = '/getPlaySongVkey'
  const data = Object.assign({}, commonParams, {
    // -: 'getplaysongvkey7257571376863041',
    // g_tk: 5381,
    // loginUin: 0,
    // hostUin: 0,
    format: 'json',
    // inCharset: 'utf8',
    // outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    // data: `{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"5412366341","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"5412366341","songmid":["0013WPvt4fQH2b"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":24,"cv":0}}`
    data: {
      'req_0': {
        'module': 'vkey.GetVkeyServer',
        'method': 'CgiGetVkey',
        'param': {
          'guid': '5412366341',
          'songmid': [songmid],
          'songtype': [0],
          'uin': '0',
          'loginflag': 1,
          'platform': '20'
        }
      },
      'comm': {'uin': 0, 'format': 'json', 'ct': 24, 'cv': 0}
    }
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data.req_0.data.midurlinfo[0].purl)
  })
}

// 获取推荐歌单数据
export function getSongList(disstid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    // new_format: 1,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 1928093487
  })
  return jsonp(url, data, options)
}

// export function getSongList(disstid) {
//   const url = '/api/getSongList'
//
//   const data = Object.assign({}, commonParams, {
//     uin: 0,
//     format: 'json',
//     notice: 0,
//     needNewCode: 1,
//     new_format: 1,
//     pic: 500,
//     // 关键数据
//     disstid,
//     type: 1,
//     json: 1,
//     utf8: 1,
//     onlysong: 0,
//     picmid: 1,
//     nosign: 1,
//     song_begin: 0,
//     platform: 'yqq',
//     song_num: 100,
//     _: +new Date()
//   })
//
//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }

// export function getSongList(disstid) {
//   const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
//
//   const data = Object.assign({}, commonParams, {

//     disstid,
//     type: 1,
//     json: 1,
//     utf8: 1,
//     onlysong: 0,
//     platform: 'yqq',
//     hostUin: 0,
//     needNewCode: 0
//   })

//   return jsonp(url, data, options)
// }
