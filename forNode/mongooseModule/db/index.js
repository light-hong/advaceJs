/* 
* 该模块用于连接数据库
*/
// 定义变量
const PORT = 27017
const DB_NAME = 'practice'

// 1.引入mongoose
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

module.exports = new Promise((resolve, reject) => {
  // 2.连接数据库
  mongoose.connect(`mongodb://localhost:${PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // 3.绑定监听
  mongoose.connection.once('open', (err) => {
    if (!err) {
      console.log('数据库连接成功')
      resolve()
    } else {
      reject(err)
    }
  })
})
