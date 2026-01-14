# for...in 与 for...of的区别

## JavaScript 示例

以下是JavaScript中for...in 与 for...of的区别的示例代码：

```js
// title: for...in 与 for...of的区别
const obj = {
  a: 1,
  b: 2,
};
for (const val of Object.keys(obj)) {
  console.log(val);
}
for (const key in obj) {
  console.log("====key====", key);
}
for (const val of Object.values(obj)) {
  console.log(val);
}
for (const val of Object.entries(obj)) {
  console.log(val);
}

const arr = [1, 2];
for (const val of arr) {
  console.log("====arr====", val);
}
for (const key in arr) {
  console.log("====arr-in===", key);
}
arr.forEach((v, i) => {
  console.log("====arr-forEach====", v, i);
});
for (let i = 0; i < arr.length; i++) {}

// for...in 与 for...of的区别
/**
 * 1. for...in 遍历键，另一个遍历值
 * 2. for...in 遍历原型链
 * 3. for...of性能比较好
 */

```

## 说明

该示例展示了不同语言中for...in 与 for...of的区别的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
