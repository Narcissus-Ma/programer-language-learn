# 函数柯里化

## JavaScript 示例

以下是JavaScript中函数柯里化的示例代码：

```js
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

```

## 说明

该示例展示了不同语言中函数柯里化的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
