class Person {
  constructor(name) {
    this.name = name
  }

  sayHello() {
    return 'Hello, I am' + this.name
  }
}

var wn = new Person('wn')
console.log(wn.sayHello())
 
// es5
function Person(name) {
  this.name = name
}
Person.prototype.sayHello = function() {
  return 'Hello I am' + this.name
}