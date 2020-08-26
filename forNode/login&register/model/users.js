const mongoose = require('mongoose')
// 1.引入schema
const Schema = mongoose.Schema
// 2.创建约束对象
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  user_name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
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
module.exports = mongoose.model('users', userSchema)