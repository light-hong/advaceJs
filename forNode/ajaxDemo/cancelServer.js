const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
//禁止响应头显示服务器内部具体实现
app.disable('x-powered-by')

app.get('/getauthcode', (request, response) => {
  setTimeout(() => {
    const authCode = Math.floor(Math.random()*8999 + 1000)
    response.send(authCode.toString())
  }, 2000)
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功')
  else console.log(err)
})
