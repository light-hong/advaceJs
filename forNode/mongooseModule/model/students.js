const mongoose = require('mongoose')
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
module.exports = mongoose.model('students', studentSchema)