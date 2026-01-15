# 获取数据类型

## JavaScript 示例

以下是JavaScript中获取数据类型的示例代码：

```js
// title: 获取数据类型
function getType(obj) {
  let type = typeof obj;
  if (type !== "object") return type;
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (\S+)\]$/, "$1");
}
console.log(getType(null), getType([]));

```

## 说明

该示例展示了不同语言中获取数据类型的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
