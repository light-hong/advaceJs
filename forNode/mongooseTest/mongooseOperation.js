// 1.引入mongoose
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const dbPromise = new Promise((resolve, reject) => {
  // 2.连接数据库
  mongoose.connect('mongodb://localhost:27017/practice', {
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

;
(async () => {
  await dbPromise
  // 操作数据库
  // 1.引入schema
  const Schema = mongoose.Schema
  // 2.创建约束对象
  const studentSchema = new Schema({
    stu_id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    hobby: [String],
    info: Schema.Types.Mixed, // 接收所有类型的数据
    date: {
      type: Date,
      default: Date.now()
    },
    enable_flag: {
      type: String,
      default: 'Y'
    }
  })
  // 3.创建模型对象
  const studentModel = mongoose.model('students', studentSchema)
  // 4.数据的增删改查
  /* studentModel.create({
    stu_id: '20200808004',
    name: 'tom',
    age: 41,
    sex: '男',
    hobby: ['打篮球', '泡妞'],
    info: '伟大的篮球运动员'
  }, (err, data) => {
    if (!err) {
      console.log('数据写入成功', data)
    } else {
      console.log(err)
    }
  }) */
  /* const result1 =  studentModel.create({
    stu_id: '20200808005',
    name: 'tom',
    age: 41,
    sex: '男',
    hobby: ['打篮球', '泡妞'],
    info: '伟大的篮球运动员'
  })
  console.log(await result1)

  const result2 = studentModel.findOne({age: 41}, {name: 1, sex: 1})
  console.log(await result2)

  const result3 = studentModel.updateMany({age: 37}, {sex: '女'})
  console.log(await result3) */

  // await studentModel.deleteOne({stu_id: '20200808005'})
})()