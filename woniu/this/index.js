// function identify() {
//     return this.name.toUpperCase() //toUpperCase() 把字母小写转换成大写的方法
// }
// function speak() {
//     var greeting = "Hello, I am" + identify.call(this)
//     console.log(greeting)
// }
// var me = {
//     name:'wn'
// }
// var you = {
//     name:'mg'
// }
// // console.log(identify.call(me))
// // console.log(identify.call(you))

// // console.log(speak.call(me))

// function identify(context) {
//     return context.name.toUpperCase() 
// }
// function speak() {
//     var greeting = "Hello, I am" + identify.call(context)
//     console.log(greeting)
// }
// console.log(identify(me))

// //this提供一种更优雅的方式来隐式“传递”一个对象
// function identify() {
//     return this.name.toUpperCase()
// }
// console.log(identify.call(me))





// function foo(num) {
//     console.log("foo" + num) 
//    this.count++
// }

// var data = {
//     count = 0
// }

// for (var i = 0; i < 10; i++) {
//     if(i > 5) {
//         foo(i)
//     }
// }
// console.log(data.count)




// ............................................

// function baz() {
//     // 当前调用栈是 baz
//     // 因此 当前调用位置是全局作用域
//     console.log('baz')
//     bar()
// }
// function bar() {
//     // 当前调用栈是baz -> bar
//     // 因此 当前调用位置是baz
//     console.log('bar')
//     foo()
// }
// function foo() {
//     console.log('foo')
// }
// baz()

function foo(){
    console.log(this.a)
}
var obj = {
    a: 2,
    foo: foo
}
obj.foo()