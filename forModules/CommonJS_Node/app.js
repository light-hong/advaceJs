// 引入自定义模块
const module1 = require('./modules/module1')
const module2 = require('./modules/module2')
const module3 = require('./modules/module3')

// 引入第三方模块
const uniq = require('uniq')

/* 
 * module.exports = exports = {}
*/

console.log(module1.data)
module1.module1Test1()
module1.module1Test2()
module2()
console.log(module3.students)
console.log(module3.schools)

let res = uniq([1, 5, 5, 66, 2, 2])
console.log(res)