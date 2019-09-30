global.gc();
console.log(process.memoryUsage().heapUsed);
let key = new Array(5 * 1024 * 1024); // 1

let wp = new WeakMap();
