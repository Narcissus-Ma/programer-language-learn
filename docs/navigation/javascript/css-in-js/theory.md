# styleComponent 中 css in js 的实现原理

## JavaScript 示例

以下是JavaScript中styleComponent 中 css in js 的实现原理的示例代码：

```js
// title: styleComponent 中 css in js 的实现原理
function upperCase(strings, ...values) {
  let result = "";
  strings.forEach((str, i) => {
    if (i > 0) {
      result += String(values[i - 1]).toUpperCase();
    }
    result += str;
  });
  return result;
}

const name = "rocky";
const age = 18;
const str = upperCase`my name is ${name}, i'm ${age} years old.`;
console.log(str);

```

## 说明

该示例展示了不同语言中styleComponent 中 css in js 的实现原理的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
