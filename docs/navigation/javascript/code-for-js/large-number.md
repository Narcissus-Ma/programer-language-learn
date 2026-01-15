# 大数相加

## JavaScript 示例

以下是JavaScript中大数相加的示例代码：

```js
// title: 大数相加
function outOfRangeAdd(a, b) {
  let maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, 0);
  b = b.padStart(maxLength, 0);
  console.log(a, b);
  let t = 0,
    f = 0,
    sum = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }
  if (f !== 0) {
    sum = "" + f + sum;
  }
  return sum;
}

let a = "9007199254740991",
  b = "1234567899999999999";

console.log(outOfRangeAdd(a, b));

```

## 说明

该示例展示了不同语言中大数相加的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
