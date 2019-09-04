// 简单类型的拷贝是拷贝值
let a = 1; // 值
let b = a;

b = 2;
console.log(a);
// 复杂数据类型，拷贝是引用式赋值
let obj = {
    a: 1,
    b: function() {
        console.log('bbb');
    }
};
// 二线公司
// 深拷贝
// 返回新对象
// 数组中有什么操作， 返回新数组的
obj2 = JSON.parse(JSON.stringify(obj));   //先把obj变成字符串，再把字符串变成对象
obj2.a = 2;
// 浅拷贝
console.log(obj2);

