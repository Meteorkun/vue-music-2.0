function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 随机打乱数组
export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

// 节流函数 作用：在搜索页面的搜索框，防止每次输入都去调用一次接口 给个延时
export function debounce(func, delay) {
  // 定义一个定时器
  let timer
  return function (...args) {
    // 如果之前有定时器就清理定时器
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
