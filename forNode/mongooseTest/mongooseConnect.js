// 1.引入mongoose
const mongoose = require('mongoose')

const dbPromise = new Promise((resolve, reject) => {
  // 2.连接数据库
  mongoose.connect('mongodb://localhost:27017/practice')
  
  // 3.绑定监听
  mongoose.connection.once('open', (err)=> {
    if (!err) {
      console.log('数据库连接成功')
      resolve()
    } else {
      reject(err)
    }
  })
})

/* dbPromise.then(() => {
  console.log('操作数据库的代码')
}, (err) => {
  console.log(err)
}) */

/* dbPromise
.then(() => {
  console.log('操作数据库的代码')
})
.catch((err) => {
  console.log(err)
}) */

;(async () => {
  await dbPromise
  console.log('操作数据库的代码')
})()