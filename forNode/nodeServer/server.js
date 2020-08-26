// 1.引入http模块
const http = require('http')
const {
  parse
} = require('querystring')

// 2.创建服务对象
const server = http.createServer((request, response) => {
  /* 
  * request请求对象------客户端发过来的数据，都在request里面
  * response响应对象------交给客户端的数据， 都在response里面
  */
 // 获取客户端传递的查询字符串
 const param = request.url.split('?')[1]
 const paramObj = parse(param)
 console.log(paramObj)
 // 设置响应
 response.setHeader('content-type', 'text/html;charest=utf-8')
 response.end('<h1>hello node</h1>')
})
// 3.绑定端口监听
server.listen(3000, err => {
  if (!err) console.log('3000端口服务器启动成功')
  else console.log(err)
})
