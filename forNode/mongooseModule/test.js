// 引入数据库连接模块
const db = require('./db')

// 引入模型对象
const studentsModel = require('./model/students')
const teachersModel = require('./model/teachers')

// 操作数据库
;
(async () => {
  await db

  const res = studentsModel.find({
    name: 'kobe'
  })
  console.log(await res)

  await teachersModel.create({
    teacher_id: '20200808001',
    name: '老胡',
    age: 41,
    sex: '男',
    hobby: ['打篮球', '泡妞'],
    info: '伟大的篮球运动员'
  })
})()