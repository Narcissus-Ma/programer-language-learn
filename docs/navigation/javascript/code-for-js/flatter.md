# 数组扁平化的三种解法

## JavaScript 示例

以下是JavaScript中数组扁平化的三种解法的示例代码：

```js
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

```

## 说明

该示例展示了不同语言中数组扁平化的三种解法的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
