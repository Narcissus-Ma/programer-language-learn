// title: 实现一个 reduce 方法
/**
 * 思路：
 * 1，先考虑两参数，传入的function, init
 * 2, 考虑this
 */
Array.prototype.myReduce = function (func, init) {
  const arr = this; // arr是指调用它的函数
  let total = init || arr[0];
  for (let i = init ? 0 : 1; i < arr.length; i++) {
    total = func(total, arr[i], index, arr);
  }
  return total;
};
// 调用举例
// arr.reduce((pre, cur, index, arr) => pre + cur, 0);
