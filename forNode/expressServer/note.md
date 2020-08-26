1. request对象常用方法
   + request.query:获取get请求查询字符串的参数，拿到的是一个对
   + request.params:获取get请求参数路由的参数，拿到的是一个对象
   + request.body:获取post请求体，拿到的是一个对象（要借助一个中间件）
   + request.get(xxxx):获取请求头中指定key对应的value

2. response对象常用方法
   + response.send():给浏览器做出一个响应
   + response.end():给浏览器做出一个响应（不会自动追加响应头）
   + response.download():告诉浏览器下载一个文件
   + response.sendFile():给浏览器发送一个文件
   + response.redirect():重定向到一个新的地址（url）
   + response.set(header,value):自定义响应头内容
   + response.get():获取响应头指定key对应的value
   + res.status(code):设置响应状态码