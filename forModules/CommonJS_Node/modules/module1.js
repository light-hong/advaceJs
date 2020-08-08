module.exports = {
  data: 'module1Data',
  module1Test1() {
    console.log(`module1---module1Test1---${this.data}`)
  },
  module1Test2() {
    console.log(`module1---module1Test2---${this.data}`)
  }
}