// function Person (name) {
//   this.name = name
// }
// let p = new Person('wn')
// p.__proto__ = Person.prototype
// console.log(p.__proto__);


// function Person(name) {
//   this.name = name
//   return
// }
// let p = new Person()
// console.log(p);

// Array.prototype.method = function() {}
// var myArray = [1,2,3,4,5,6,7]
// myArray.name = 'wn'
// for (let index of myArray) {
//   console.log(index);
// }
// for in 
// 1. index是索引为字符串型数字，不能进行几何运算
// 2. 遍历的顺序有可能不是按照实际数组的内部顺序运行
// 3. 使用 for in 会遍历数组所有的可枚举属性，包括原

// for of 
// 遍历的是数组的元素
// 不包括数组原型和索引

let gArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
// function reduceDimension(arr){
//   let ret = [];
//   let toArr = function(arr){
//       arr.forEach(function(item){
//           item instanceof Array ? toArr(item) : ret.push(item);
//       });
//   }
//   toArr(arr);
//   return ret;
// }

function outputArr(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  }, [])
}
console.log(outputArr(gArr));


function jiangwei(gArr) {
  var oArr = []
  function digui(gArr) {
    for (var i =0; i < gArr.length; i++) {
      if (gArr[i] instanceof Array) {
        digui(gArr[i])
      } else {
        oArr.push(gArr[i])
      }
    }
  }
  digui(gArr)
  return oArr
}
console.log(jiangwei(gArr));

// let oArr = [1,2,3,4,5,6,7,3,2,8]