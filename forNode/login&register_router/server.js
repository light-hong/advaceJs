const express = require('express')

// 引入数据库连接模块
const db = require('./db')

// 引入user模型对象
const usersModel = require('./model/users')

//引入业务路由loginRegister
const loginRegister = require('./router/loginRegister')
//引入UI路由
const UIRouter = require('./router/uiRouter')

const PORT = 3000

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({
  extended: true
}))

// 连接数据库
db.then(() => {
  //使用登录-注册业务路由器
  app.use(loginRegister)
  //使用UI路由器
  app.use(UIRouter)
}).catch((err) => {
  console.log(err)
})


app.listen(PORT, err => {
  if (!err) console.log(`服务器启动成功，端口号${PORT}`)
  else console.log(err)
})