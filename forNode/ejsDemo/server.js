const express = require('express')
const {join} = require('path')
const app = express()

// 配置渲染引擎
app.set('view engine', 'ejs')

// 配置模板文件夹
app.set('views', join(__dirname, 'views'))

app.get('/test', (request, response) => {
  // 用ejs渲染一个页面
  response.render('index', {name: 'kobe'})
})

app.listen(3000, err => {
  if(!err) console.log('服务器启动成功')
  else console.log(err)
})