// 普世
const curry=require('./b.js');
function checkByRegExp(reg,string){
    return reg.test(string);
}
let checkCellphone=curry(checkByRegExp)(/^1[3-9]\d{9}$/);
console.log(checkCellphone('13788897654'));
let checkEmail=curry(checkByRegExp)(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
console.log(checkEmail('7542123@qq.com'));
// console.log(checkByRegExp(/^1[3-9]\d{9}$/,'18623654583'));
// console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'7542123@qq.com'))