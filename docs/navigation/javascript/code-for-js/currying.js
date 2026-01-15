// title: 函数柯里化
function currying(fn, ...args) {
  const length = fn.length;
  let allArgs = [...args];
  const res = (...newArgs) => {
    // 递归收集参数
    allArgs = [...allArgs, ...newArgs];
    // 参数收集完执行函数返回结果
    if (allArgs.length === length) {
      return fn(...allArgs);
    } else {
      return res;
    }
  };
  return res;
}

// const add = (a, b, c) => a + b + c;
// const a = currying(add, 1, 2);
// console.log(a(3));

// 实现一个 add 方法 使计算结果能够满足如下预期： add(1)(2)(3)()=6 add(1,2,3)(4)()=10
function add(...args) {
  let allArgs = [...args];
  function fn(...newArgs) {
    if (!newArgs.length) {
      return allArgs.reduce((pre, cur) => pre + cur, 0);
    }
    allArgs = [...allArgs, ...newArgs];
    return fn;
  }
  return fn;
}
console.log(add(1)(2)(3)());
console.log(add(1, 2, 3)(4)());
