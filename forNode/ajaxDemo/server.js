const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
//禁止响应头显示服务器内部具体实现
app.disable('x-powered-by')
//用于解析post请求的请求体参数
app.use(express.urlencoded({
  extended: true
}))

app.get('/testGet', (request, response) => {
  console.log(request.query)
  console.log('testGET路由被调用了')
  response.send('ajaxGet')
})
app.get('/testPost', (request, response) => {
  console.log(request.query)
  console.log(request.body)
  console.log('testPOST路由被调用了')
  response.send('ajaxPost')
})

app.listen(3000, err => {
  if(!err) console.log('服务器启动成功')
  else console.log(err)
})
