const crypto = require('crypto')
// api 请求 携带 token
// localStorage 独立

// sha256 === md5
let abc = 'helloWorld'
const sign = crypto.createHmac('sha256', 'abc').update(abc);
console.log(sign);
