import originJsonp from 'jsonp'

export default function jsonp(url,data,option){
  //如果没有？加一个？,否则加 &
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve,reject) => {
    originJsonp(url,option,(err,data) => {
      if(!err){
        resolve(data)
      }else{
        reject(err)
      }
    })
  }
}

export function param(data){
  //拼接url参数
  let url = ''
  for(var k in data){
    let value = data[k] != undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  //如果url有值去除第一个&符号
  return url ? url.substring(1) : ''
}


// import originJsonp from 'jsonp'

// export default function jsonp(url, data, option) {
//   url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

//   return new Promise((resolve, reject) => {
//     originJsonp(url, option, (err, data) => {
//       if (!err) {
//         resolve(data)
//       } else {
//         reject(err)
//       }
//     })
//   })
// }

// export function param(data) {
//   let url = ''
//   for (var k in data) {
//     let value = data[k] !== undefined ? data[k] : ''
//     url += '&' + k + '=' + encodeURIComponent(value)
//   }
//   return url ? url.substring(1) : ''
// }
