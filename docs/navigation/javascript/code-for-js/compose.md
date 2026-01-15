# 实现一个compose函数

## JavaScript 示例

以下是JavaScript中实现一个compose函数的示例代码：

```js
// title: 实现一个compose函数
function compose(...fn) {
  if (!fn.length) return (v) => v;
  // if (fn.length === 1) return fn[0];
  return fn.reduce((a, b) => {
    return (...args) => a(b(...args));
  });
}
// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
// const a = compose(fn1, fn2, fn3, fn4);
// const a = compose();
const a = compose(fn1);
console.log(a(1)); // 1+4+3+2+1=11

```

## 说明

该示例展示了不同语言中实现一个compose函数的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
