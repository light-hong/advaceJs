import qs from 'qs'
import { delete } from 'vue/types/umd'

/**
 * fetch封装
 */

 /**
  * 根据环境变量进行接口区分
  */
 let baseURL = ''
 let baseURLArr = [
   {
     type: 'development',
     url: 'http://127.0.0.1:3000'
   },
   {
     type: 'test',
     url: 'http://192.168.20.12:8080'
   },
   {
     type: 'production',
     url: 'http://api.xxx.com'
   }
 ]

 baseURLArr.forEach(item => {
   if (process.env.NODE_ENV === item.type) {
     baseURL = item.url
   }
 })

export default function request(url, options = {}) {
  url = baseURL + url

  /**
   * Get系列请求的处理
   */
  !options.method ? options.method = 'GET' : null
  if (options.hasOwnProperty('params')) {
    if (/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.method)) {
      cosnt ask = url.includes('?') ? '&' : '?'
      url += `${ask}${qs.stringify(params)}`
    }
    delete options.params
  }

  /**
   * 合并配置项
   */
  options = Object.assign({
    // 允许跨域携带资源凭证 same-origin同源可以 omit都拒绝
    credentials: 'include',
    // 设置请求头
    headers: {}
  })

  /**
   * token的校验
   */
  const token = localStorage.getItem('token')
  token && (options.headers.Authorization = token)

  /**
   * Post请求的处理
   */
  if (/^(POST|PUT)$/i.test(optiosn.method)) {
    !options.type ? options.type = 'urlencoded' : null
    if (options.type === 'urlencoded') {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      options.body = qs.stringify(options.body)
    }
    if (options.type === 'json') {
      options.headers['Content-Type'] = 'application/json'
      options.body = JSON.stringify(options.body)
    }
  }

  return fetch(url, options).then(response => {
    // 返回的结果可能是非200状态码
    if (!/^(2|3)\d{2}$/.test(response.status)) {
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
      return Promise.reject(response)
    }
    return response.json()
  }).catch(error => {
    if (!window.navigator.onLine) {
      // 断网处理，可以跳转到断网页面
      return
    }
    return Promise.reject(error)
  })

}

