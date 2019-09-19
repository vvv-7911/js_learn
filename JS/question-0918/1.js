const box = { a: 10, b: { c: 100} };
// Object.freeze(box);
// box.a = 100;
// box.b.c = 1000
const box1 = box;
box1.a = 1000;
// console.log(box);
// box ?

const arr = [0, 1];
Object.freeze(arr);
arr[0] = 123;
// console.log(arr)



// 2
const {name: myName} = {name: 'lihua'};
// console.log(name);

// 3
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `from cache ${num}`
    }else {
      const r = num + 10;
      cache[num] = r;
      return `calcul ${r}`;
    }
  }
}
// addFunc 是 一个函数
const addFunc = add();
// console.log(addFunc(10)) // calcul
// console.log(addFunc(10)) // from cache
// console.log(addFunc(2 * 5)) // from cache


// 4
const arr4 = ['lihua', 'lilei'];
// 枚举一个对象里面的属性 arr4[0]
// {'0': 'lihua', '1': 'lilei'}
for (let item1 in arr4) {
  console.log(item1);
}
// 数组 Map Set String (可迭代对象)
// for of  可以用来遍历可迭代对象
for (let item2 of arr4) {
  console.log(item2)
}

// 5
var status = 'global';
var obj = {
  status: 'obj',
  getStatus: function() {
    return this.status;
  }
}
console.log(obj.getStatus());
var fun = obj.getStatus;
console.log(fun());

// 6
function Foo() {}
// class Foo {
// }
// 只是一个 语法糖，背后还是es5
console.log(typeof FOO);

//7
// es6 新增的一个 数据类型
// string number bool null undefined Symbol
let a = Symbol('a');
let b = Symbol('a');
console.log(a === b);
//给对象添加 属性 不会覆盖之前的属性
var obj = {
  [a]: 'a value',
  b: 'b value'
}
console.log(Object.keys(obj));
// 返回 一个对象上面 可枚举的属性