# 实现一个 Object.is 方法

## JavaScript 示例

以下是JavaScript中实现一个 Object.is 方法的示例代码：

```js
// title: 实现一个 Object.is 方法
// Object.is不会转换被比较的两个值的类型，这点和===更为相似，他们之间也存在一些区别。
/**
 * 1. NaN在===中是不相等的，而在Object.is中是相等的
 * 2. +0和-0在===中是相等的，而在Object.is中是不相等的
 */

function myObjectIs(x, y) {
  if (x === y) {
    // x不为0 直接返回true;
    if (x !== 0) {
      return true;
    } else if (1 / x === 1 / y) {
      // 如果 x === 0，则需要判断+0和-0，则可以直接使用 1/+0 === Infinity 和 1/-0 === -Infinity来进行判断
      return true;
    } else {
      return false;
    }
    // return x !== 0 || 1 / x === 1 / y; // 简写
  }
  // x !== y 的情况下，只需要判断是否为NaN，如果x!==x，则说明x是NaN，同理y也一样
  return x !== x && y !== y;
}
console.log(myObjectIs(NaN, NaN), NaN === NaN);
console.log(myObjectIs(+0, -0), +0 === -0);
console.log(Object.is(+0, -0));

```

## 说明

该示例展示了不同语言中实现一个 Object.is 方法的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
