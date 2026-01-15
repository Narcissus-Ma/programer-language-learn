# 数字转字符串

## JavaScript 示例

以下是JavaScript中数字转字符串的示例代码：

```js
// title: 数字转字符串
// 1234567890 1,234,567,890
function num2string(num) {
  const res = [];
  const _num = String(num).split("").reverse();
  for (let i = 0; i < _num.length; i++) {
    if (i && i % 3 === 0) {
      res.push(",");
    }
    res.push(_num[i]);
  }
  console.log(res.reverse().join(""));
}
num2string(1234567890);

```

## 说明

该示例展示了不同语言中数字转字符串的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
