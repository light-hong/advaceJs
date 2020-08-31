import axios from 'axios'
import qs from 'qs'

/**
 * axios封装
 */

/**
 * 根据环境变量区分接口的默认地址
 * package.json里可以配置test命令
 * "serve:test": "set NODE_ENV=test&&vue-cli-service serve",
 * "serve:production": "set NODE_ENV=production&&vue-cli-service serve",
 */
switch (process.env.NODE_ENV) {
  case 'production':
    axios.defaults.baseURL = "http://api.xxx.com"
    break
  case 'test':
    axios.defaults.baseURL = "http://192.168.20.12:8080"
    break
  default:
    axios.defaults.baseURL = "http://127.0.0.1:3000"
}

/**
 * 设置请求超时时间和跨域是否允许携带凭证
 */
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true

/**
 * 根据服务器要求
 * 设置请求传递数据的格式
 */
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// 设置post请求数据格式
axios.defaults.transformRequest = data => qs.stringify(data)

/**
 * 设置请求拦截器
 * 客户端发送请求 -> [请求拦截器] -> 服务器
 * Token校验(JWT)：接收服务器返回的token，存储到vuex/本地存储中，每一次向服务器发请求，我们应该把token带上
 */
axios.interceptors.request.use(config => {
  // 携带token
  const token = localStorage.getItem('token')
  token && (config.headers.Authorization = token)
  return config
}, error => Promise.reject(error))

/**
 * 响应拦截器
 * 服务器返回信息 -> [拦截的统一处理] ->客户端Js获取到信息
 */
/* axios.defaults.validateStatus = status => {
  // 自定义响应成功的HTTP状态码
  return /^(2|3)\d{2}$/.test(status)
} */
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  const { response } = error
  if (response) {
    // 服务器返回结果了,设置不同状态码的处理
    switch (response.status) {
      case 401: // 当前请求需要用户验证（一般是未登录）
        // ...
        break
      case 403: // 服务器已经理解请求，但是拒绝执行它（一般是token过期）
        // localStorage.removeItem('token')
        // 跳转到登录页
        break
      case 404: // 请求失败 跳转到404页面
        // ...
        break
    }
  } else {
    // 服务器连结果都没返回
    if (!window.navigator.onLine) {
      // 断网处理，可以跳转到断网页面
      return
    }
    return Promise.reject(error)
  }
})

export default axios
