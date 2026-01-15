// title: 数组扁平化的三种解法
// 递归解法
function flatter(arr) {
  if (!arr.length) return [];
  return arr.reduce(
    (pre, cur) =>
      Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur],
    []
  );
}
// 迭代解法
function flatter1(arr) {
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
// es6内置api
function flatter2(arr) {
  return arr.flat(Infinity);
}

// lodash

const arr = [1, 2, [1, [2, 3, [4, 5, [6]]]]];
console.log(flatter2(arr));
