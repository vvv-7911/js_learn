// 一个字符
// let phoneReg = /^1[3-9][0-9]{9}$/; 
// console.log(phoneReg.test("13888888888"));

// let phoneReg =  /1[3-9][0-9][0-9]{8}/; 
// let str = "我的号码是13888888888,存下吧";
// // 得到手机号， 判断服务商
// console.log(str.match(phoneReg));

// 754211506@qq.com 邮箱服务商
let emailReg = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/;  // + 在这表示匹配至少匹配一次 如：[0-9a-zA-Z]+ 如果是com 就匹配3次 cn 匹配2次
console.log(emailReg.test('754211506@qq.com'));