# 实现一个 reduce 方法

## JavaScript 示例

以下是JavaScript中实现一个 reduce 方法的示例代码：

```js
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

```

## 说明

该示例展示了不同语言中实现一个 reduce 方法的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
