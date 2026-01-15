# 树形结构转成列表

## JavaScript 示例

以下是JavaScript中树形结构转成列表的示例代码：

```js
// title: 树形结构转成列表
function tree2list(data) {
  const list = [];
  function dfs(treeData) {
    if (treeData.children) {
      list.push(treeData);
      treeData.children.forEach((v) => {
        dfs(v);
      });
      Reflect.deleteProperty(treeData, "children");
    } else {
      list.push(treeData);
    }
  }
  dfs(data[0]);
  return list;
}
const data = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点1_1",
        parentId: 1,
      },
    ],
  },
];
const res = tree2list(data);
console.log(res);

```

## 说明

该示例展示了不同语言中树形结构转成列表的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
