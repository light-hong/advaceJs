// 1.引入express模块
const express = require('express')

// 2.创建APP应用对象
const app = express()

// 3.设置路由
// 根路由
app.get('/', (request, response) => {
  response.send('根路由')
})
// 一级路由
app.get('/meishi', (request, response) => {
  // 获取url查询参数
  const param = request.query
  console.log(param)
  response.send('一级路由')
})
// 二级路由
app.get('/meishi/huoguo', (request, response) => {
  response.send('二级路由')
})
// 参数路由
app.get('/meishi/huoguo/:id', (request, response) => {
  // 获取占位参数路由对象
  const param = request.params
  console.log(param)
  response.send('参数路由')
})

// 4.绑定端口监听
app.listen(3000, err => {
  if (!err) console.log('3000端口服务器启动成功')
  else console.log(err)
})
