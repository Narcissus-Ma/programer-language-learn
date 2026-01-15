# 把一个 DOM 节点输出 JSON 的格式

## JavaScript 示例

以下是JavaScript中把一个 DOM 节点输出 JSON 的格式的示例代码：

```js
// title: 把一个 DOM 节点输出 JSON 的格式
// 请实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式
function dom2Json(domtree) {
  let obj = {};
  obj.name = domtree.tagName;
  obj.children = [];
  domtree.childNodes.forEach((child) => obj.children.push(dom2Json(child)));
  return obj;
}

```

## 说明

该示例展示了不同语言中把一个 DOM 节点输出 JSON 的格式的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
