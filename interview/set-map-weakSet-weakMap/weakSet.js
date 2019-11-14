// weakSet 对象允许你将弱引用对象存储在一个集合中 --- 弱引用版本的Set
// var test = {
//   name: 'test',
//   content: {
//     name: 'wn',
//     age: '18'
//   }
// }

// var ws = new WeakSet()
// ws.add(test.content)
// console.log(ws);
// delete test.content
// console.log(ws);

const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用')
    }
  }
}