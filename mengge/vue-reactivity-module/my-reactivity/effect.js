let effectStack = [];
let targetMap = {};
export function effect(fn) {
  if(effectStack.indexOf(fn) === -1) {
    try {
      effectStack.push(fn);
      fn()
      // get -> track
    } finally {
      effectStack.pop();
    }
  }
}
export function track(target, type, key) {
  let effect = effectStack[effectStack.length - 1];
  // fn
  let dep = targetMap.get(target);
  if (dep === undefined) {
    dep = new Map();
    targetMap.set(target, dep);
  }
  let depsMap = dep.get(key);
  if (!depsMap) {
    depsMap = new Set();
    dep.set(key, depsMap);
  }
  depsMap.add(effect);
  console.log(targetMap);
}
