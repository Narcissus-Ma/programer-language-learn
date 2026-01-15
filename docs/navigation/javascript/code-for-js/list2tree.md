# 把一个列表转换为树结构

## JavaScript 示例

以下是JavaScript中把一个列表转换为树结构的示例代码：

```js
// title: 把一个列表转换为树结构
function list2tree(data) {
  const treeData = [];
  for (let i = 0; i < data.length; i++) {
    if (+data[i].parentId !== 0) {
      // 查找算法效率太低，可以建立一个映射表
      const parent = data.find((v) => v.id === data[i].parentId);
      if (!parent.children) {
        parent.children = [];
      }
      // 父亲的儿子
      parent.children.push(data[i]);
    } else {
      treeData.push(data[i]);
    }
  }
  return treeData;
}

function list2treeV2(data) {
  const map = {};
  const treeData = [];
  for (let i = 0; i < data.length; i++) {
    map[data[i].id] = data[i];
  }
  for (let i = 0; i < data.length; i++) {
    if (+data[i].parentId !== 0) {
      // 直接通过映射读取parentId，提升算法效率
      const parent = map[data[i].parentId];
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(data[i]);
    } else {
      treeData.push(data[i]);
    }
  }
  return treeData;
}

const data = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
  },
  {
    id: 2,
    text: "节点1_1",
    parentId: 1,
  },
];

// const res = list2tree(data);
const res = list2treeV2(data);
console.log(res[0].children);

```

## 说明

该示例展示了不同语言中把一个列表转换为树结构的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
