/**
 * UI路由
 */
// 引入Router
const { Router } = require('express')

//引入path模块
const {resolve} = require('path')

// 实例化Router
const router = new Router()

// UI路由
router.get('/register', (request, response) => {
  const url = resolve(__dirname, '../public/register.html')
  response.sendFile(url)
})
// UI路由
router.get('/login', (request, response) => {
  const url = resolve(__dirname, '../public/login.html')
  response.sendFile(url)
})

module.exports = router
