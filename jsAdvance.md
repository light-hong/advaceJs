# 温故而知新

- js数据类型
  - 基本数据类型：String、Number、Boolean、Null、Undefined、Symbol
  - 引用数据类型：Object、Array、Function

- 判断数据类型

   + typeof `(typeof 变量)`
     - 可以区别：数值、字符串、布尔值、undefined、function、Symbol
     - 不能区别：null与对象，一般对象与数组

  - instanceof `(变量 instanceof 数据类型)`
    - 专门用来判断对象数据的类型：Object、Array、Function

+ this理解

  1. 关键字，不能指定定义变量
  2. this本身是一个内置的变量，该变量用于指向一个对象
  3. this有两种：全局this—window；局部(函数)this—调用其的对象，构造函数this—当前构造函数的实例对象
  4. 特殊this：call，apply强制修改this

+ 箭头函数this

   箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是在定义的时候处在的对象就是它的this。箭头函数的this看外层是否有函数，如果有，外层函数的this就是内部箭头函数的this，如果没有，则this是window。

+ 原型以及原型链

  原型就是一个对象，每个函数都有一个prototype的属性，改属性指向的是当前函数的显示原型对象，每个实例对象都有一个_proto_的属性，该属性指向的是当前实例对象的隐式原型对象，构造函数的显示原型对象===当前构造函数的实例对象的隐式原型对象；原型链就是在访问一个对象的属性时，现在自身属性中查找，找到就返回，如果没有，再沿着_proto_这条链向上查找，找到返回，如果最终没找到，返回undefined。

+ 执行上下文

  定义：js引擎在js代码执行之前会先创建执行环境，在执行环境中作预处理工作

  工作内容：

  1. 创建空对象 —>执行上下文对象
  2. 该空对象用于收集变量，函数，函数的参数(找var和function)
  3. 创建作用域链
  4. 确认this的指向

+ 闭包

  1. 定义
     + 闭包是一个闭合的容器
     + 我们可以认为闭包就是一个对象：{key: value}
  2. 闭包的形成条件
     + 函数嵌套
     + 内部函数引用外部函数的局部变量
  3. 作用
     + 延长外部函数局部变量的生命周期
     + 从外部访问函数内部的局部变量
  4. 闭包缺点
     + 占内存
     + 不及时清除闭包容易导致内存溢出

+ 原型链继承

  - 子类的原型对象 === 父类的实例，例如：Child.prototype = new Parent()
  - 注意点：以上的步骤会导致子类原型的构造器属性丢失，所以需要手动添加构造器属性
  - Child.prototype.constructor = Child

  ```javascript
  // 所有动物的构造函数
  function Animal(name, age) {
      this.name = name
      this.age = age
  }
  Animal.prototype.eat = function() {
      console.log('eat')
  }
  // cat的构造函数
  function Cat(name, age) {
      this.name = name
      thia.age = age
  }
  // 让子类的原型成为父类的实例对象
  Cat.prototype = new Animal()
  // 当使用原型继承的时候 注意校正子类的构造器属性
  Cat.prototype.constructor = Cat
  ```

+ 组合继承

  ``````javascript
  // 所有动物的构造函数
  function Animal(name, age) {
      this.name = name
      this.age = age
  }
  Animal.prototype.eat = function() {
      console.log('eat')
  }
  // cat的构造函数
  function Cat(name, age, sex) {
      Animal.call(this, name, age)
      thia.sex = sex
  }
  // 让子类的原型成为父类的实例对象
  Cat.prototype = new Animal()
  // 当使用原型继承的时候 注意校正子类的构造器属性
  Cat.prototype.constructor = Cat
  ``````

+ 进程和线程

  + 进程：程序的一次执行，它占有一片独有的内存空间
  + 线程：CPU的基本调度单位，是程序执行的一个完整流程

+ 进程与线程

  + 一个进程中一般至少有一个运行的线程：主线程
  + 一个进程中也可以同时运行多个线程，我们会说程序是多线程运行的
  + 一个进程内是的数据可以供其中的多个线程直接共享
  + 多个进程之间的数据是不能直接共享的

+ Class类

  ``````javascript
  // 定义类
  class Person {
      // 类的静态属性，给类自身添加的属性
      static test = function() {
          console.log('test')
      }
  	// constructor类的构造方法
  	constructor(name, age) {
          this.name = name
          this.age = age
      }
  	// 类的一般方法，定义在实例对象的原型对象上
  	showMsg() {
          console.log(this.name, this.age)
      }
  }
  ``````

+ extends类的继承

  ``````javascript
  class Child extends Person {
      constructor(name, age, sex) {
          super(name, age) // 调用父类的构造方法
          this.sex = sex
      }
      // 当父类方法不能满足时，可以在子类重写父类的方法
      showMsg() {
          console.log(this.name, this.age, this.sex)
      }
  }
  ``````

+ 从用户输入URl按下回车，一直到用户能看到界面，期间经历了什么？

   1. DNS解析（缓存）

      + 找浏览器DNS缓存解析域名
      + 找本机DNS缓存：ipconfig/displaydns > C:/dns.txt
      + 找路由器DNS缓存
      + 找运营商DNS缓存（百分之80的DNS查找，到这一步就结束）
      + 递归查询，（最不愿意看到的事，查询的是全球13台DNS根服务器中的一个）

   2. 进行TCP协议连接，三次握手（根据上一步请求回来的ip地址，去联系服务器）

      + 第一次握手：由浏览器发给服务器，我想和你说话，你能“听见”嘛？
      + 第二次握手：由服务器发给浏览器，我能听得见，你说吧！
      + 第三次握手：由浏览器发给服务器，好，那我就开始说话。

   3. 发送请求（请求报文）

   4. 得到响应（响应报文）

   5. 浏览器开始解析html

      + 预解析： 将所有外部的资源， 发请求出去

      + 解析html， 生成DOM树 

      + 解析CSS， 生成CSSOM树 

      + 合并成一个render树 

      + js是否操作了DOM或样式 

        + 有： 进行重绘重排（ 不好， 1. 尽量避免； 2. 最小化重绘重排） 

        + 没有： null 

      + 最终展示界面

   6. 断开TCP连接，四次挥手（确保数据的完整性）

      + 第一次挥手： 由浏览器发给服务器， 我的东西接受完了， 你关闭吧。
      + 第二次挥手： 由服务器发给浏览器， 我还有一些东西没接收完， 你等一会， 我接收好了我告诉你
      + 第三次挥手： 由服务器发给浏览器， 我接收完了， 你断开吧
      + 第四次挥手： 由浏览器发给服务器， 好的， 那我断开了。