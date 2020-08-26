const express = require('express')
const path = require('path')
// const bodyParser = require('body-parser')

const app = express()

// 第三方中间件
// app.use(bodyParser({ extended: true })) // 解析post请求体中的参数为一个对象，并挂载到request

// 内置中间件处理post请求体参数
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public'))) // 暴露静态资源

// 应用级(全局)中间件
// 第一种写法
/* app.use((request, response, next) => {
  console.log('应用级中间件被调用了')
  next() // 让下一个能够匹配的路由或中间件生效
}) */

// 第二种写法 哪个路由需要就写在路由方法的第二个参数
function appMiddleWare(request, response, next) {
  const host = request.get('Host')
  if (host !== 'localhost:3000') {
    response.send('禁止盗用本站链接')
  } else {
    next()
  }
}

app.get('/', (request, response) => {
  response.send('根路由')
})

app.get('/demo', (request, response) => {
  console.log(request.body)
  response.send('demo路由')
})

app.get('/test1', appMiddleWare, (request, response) => {
  response.send('test1路由')
})

app.get('/test2', (request, response) => {
  response.send('test2路由')
})

app.listen(3000, err => {
  if(!err) console.log('服务器启动成功')
  else console.log(err)
})