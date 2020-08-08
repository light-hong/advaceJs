## 面试造飞机手撸代码系列

1. call()、apply()、bind()

   call()/apply(): 调用函数，指定函数中的this为第一个参数的值，第二个参数开始call接收的是参数列表，apply第二个参数是数组

   bind(): 返回一个新的函数, 新函数内部会调用原来的函数, 且this为第一参数的值，第二个参数开始接收的是参数列表

   ```javascript
   /* 自定义函数对象的call方法 */
   Function.prototype.call = function (obj, ...args) {
       // 如果传入的是null/undefined，this指定为window
       obj = obj || window
       // 给obj添加一个方法：属性名任意，属性值必须为当前调用call的函数对象
       obj.tempFn = this
       // 通过obj调用这个方法
       obj.tempFn(...args)
       // 删除新添加的方法
       delete obj.tempFn
   }
   
   /* 自定义函数对象的apply方法 */
   Function.prototype.apply = function (obj, args) {
       obj = obj || window
       obj.tempFn = this
       obj.tempFn(...args)
       delete obj.tempFn
   }
   
   /* 自定义函数对象的bind方法 */
   Function.prototype.bind = function (obj, ...args) {
       return (...args2) => {
           this.call(obj, ..args, ...args2)
       }
   }
   // fn.bind(obj, 4)(2, 3)
   ```

   

2. array-declare数组声明式方法

   ```js
   const arr = [1, 3, 6, 9, 15, 19, 16]
   /* 实现map() */
   Array.prototype.map = function (callback) {
       const arr = []
       for (let index = 0; index < this.length; index++) {
           arr.push(callback(this[index], index))
       }
       return arr
   }
   
   console.log(arr.map((item, index) => item + 10))
   
   /* 实现reduce() */
   Array.prototype.reduce = function (callback, initValue) {
       let result = initValue
       for (let index = 0; index < this.length; index++) {
           // 调用回调函数将返回的结果赋值给result
           result = callback(result, this[index], index)
       }
       return result
   }
   
   console.log(arr.reduce((preTotal, item, index) => {
       return preTotal + (item%2===1 ? item : 0)
   }, 0))
   
   /* 实现filter() */
   Array.prototype.filter = function (callback) {
       const arr = []
       for (let index = 0; index < this.length; index++) {
           if (callback(this[index], index)) {
               arr.push(this[index])
           }
       }
       return arr
   }
   
   console.log(arr.filter((item, index) => item>8 && index%2===0))
   
   /* 实现find() */
   Array.prototype.find = function (callback) {
       for (let index = 0; index < this.length; index++) {
           if (callback(this[index], index)) {
               return this[index]
           }
       }
       return undefined
   }
   
   console.log(arr.find((item, index) => item>8 && index%2===0))
   console.log(arr.find((item, index) => item>80 && index%2===0))
   
   
   /* 实现findIndex() */
   Array.prototype.find = function (callback) {
       for (let index = 0; index < this.length; index++) {
           if (callback(this[index], index)) {
               return index
           }
       }
       return -1
   }
   console.log(arr.findIndex((item, index) => item>8 && index%2===0))
   console.log(arr.findIndex((item, index) => item>80 && index%2===0))
   
   /* 实现every() */
   Array.prototype.every = function (callback) {
       for (let index = 0; index < this.length; index++) {
           if (!callback(this[index], index)) { // 只有一个结果为false, 直接返回false
               return false
           }
       }
       return true
   }
   
   
   /* 实现some() */
   Array.prototype.every = function (callback) {
       for (let index = 0; index < this.length; index++) {
           if (callback(this[index], index)) { // 只有一个结果为true, 直接返回true
               return true
           }
       }
       return false
   }
   
   // 所有偶数位下标的元素是否都为奇数
   console.log(arr.every((item, index) => index%2===1 || item%2===1))
   console.log(arr.some((item, index) => index%2===1 || item%2===1))
   ```

   

3. 函数防抖与节流

   事件频繁触发可能造成的问题？

   1. 一些浏览器事件:window.onresize、window.mousemove等，触发的频率非常高，会造成浏览器性能问题
   2. 如果向后台发送请求，频繁触发，对服务器造成不必要的压力

   如何限制事件处理函数频繁调用

   1. 函数节流
   2. 函数防抖

   函数节流(throttle)

   1. 理解：在函数需要频繁触发时: 函数执行一次后，只有大于设定的执行周期后才会执行第二次。适合多次事件按时间做平均分配触发。
   2. 场景：窗口调整（resize）、页面滚动（scroll）、DOM 元素的拖拽功能实现（mousemove）、抢购疯狂点击（mousedown）

   函数防抖(debounce)

   1. 理解：在函数需要频繁触发时: 在规定时间内，只让最后一次生效，前面的不生效。适合多次事件一次响应的情况。
   2. 场景：实时搜索联想（keyup）、文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）

   ```javascript
   /* 创建一个节流的函数 */
   function throttle(callback, time) {
       let start = 0 // 保证第一事件必然调用回调
       return function (...args) {// 它指定给onclick
           console.log('throtte 事件')
           const current = Date.now()
           if (current-start > time) {
               // 在准备调用回调前, 将当前时间保存start
               start = current
               // 调用回调, 真正处理事件去
               callback.apply(this, args)
           }
   
       }
   }
   
   /* 创建一个防抖的函数 */
   function debounce(callback, time) {
       return function (...args) {
           console.log('debounce事件')
           // 清除上一次未完成定时器
           if (callback.timeoutId) {
               clearTimeout(callback.timeoutId)
           }
   
           // 延迟指定时间调用回调函数
           callback.timeoutId = setTimeout(() => {
               // 删除保存的定时器id标识(定时器的回调执行了)
               delete callback.timeoutId
               // 调用回调, 真正处理事件去
               callback.apply(this, args)
           }, time)
       }
   }
   ```

4. 数组去重

   数组去重: 根据当前数组产生一个去除重复元素后的新数组。

   如: [2, 3, 2, 7, 6, 7] ==> [2, 3, 7, 6]

   ```javascript
   /* 利用forEach()和indexOf()本质是双重遍历，效率差些 */
   Array.prototype.unique = function () {
       const arr = []
       this.forEach(item => {
           if (arr.indexOf(item) === -1) {
               arr.push(item)
           }
       })
       return arr
   }
   
   /* 利用forEach() + 对象容器 */
   Array.prototype.unique2 = function () {
       const arr = []
       const obj = {}
       this.forEach(item => {
           if (!obj.hasOwnProperty(item)) {
               obj[item] = true
           	arr.push(item)  
           }
       })
       return arr
   }
   
   /* 利用ES6语法(1).from + Set (2).... + Set */
   Array.prototype.unique3 = function () {
       return Array.from(new Set(this))
   }
   Array.prototype.unique4 = function () {
       return [...new Set(this)]
   }
   ```

   

5. 数组合并与切片

6. 数组扁平化

7. 实现消息订阅与发布模块

8. 对象/数组深拷贝

   ``````javascript
   function cloneDeep(target) {
     let result
     // 判断克隆对象的目标数据是对象还是数组
     if (target instanceof Object) {
       result = {}
     } else if (target instanceof Array) {
       result = []
     } else {
       return target
     }
   
     // 遍历目标数据
     for (const key in tarhet) {
       // 收集个体数据
       let item = target[i]
       // 拷贝的过程，拷贝的数据不能有引用数据类型，一旦有引用数据类型继续拆解克隆
       if (item instanceof Object || item instanceof Array) {
         result[i] = cloneDeep(item)
       } else {
         result[i] = item
       }
     }
     return result
   }
   ``````

   