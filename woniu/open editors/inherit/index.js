// function Parent1() {
//     this.name = 'parent1'
    
// }
// function Child1() {
//     Parent1.call(this)
//     this.type = 'child1'
// }
// console.log(new Child1)

// function Parent2() {
//     this.name = 'parent2'
//     this.play = [1, 2, 3]
// }
// function Child2() {
//     this.type = 'child2'
// }
// Child2.prototype = new Parent2()
// console.log(new Child2)
// var s1 = new Child2()
// var s2 = new Child2()
// s1.play.push(4)
// console.log(s1.play, s2.play)

function Parent3() {
    this.name = 'parent3'
    this.play= [1,2,3]
}
function Child3() {
    Parent3.call(this)
    this.type = 'child3'
}

// Child3.prototype = new Parent3()
// Child3.prototype = Parent3.prototype
Child3.prototype = Object.create(Parent3.prototype)
Child3.prototype.constructor = Child3
console.log(new Child3)

var s1 = new Child3()
var s2 = new Child3()
s1.play.push(4)
console.log(s1.play, s2.play)