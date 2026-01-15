# JSON 格式的虚拟 Dom 怎么转换成真实 Dom

## JavaScript 示例

以下是JavaScript中JSON 格式的虚拟 Dom 怎么转换成真实 Dom的示例代码：

```js
// title: JSON 格式的虚拟 Dom 怎么转换成真实 Dom
const vdom = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [{ tag: "A", children: [] }],
    },
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "A", children: [] },
      ],
    },
  ],
};
function vdom2rdom(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通dom
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      // 设置属性
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作
  vnode.children.forEach((child) => dom.appendChild(vdom2rdom(child)));
  return dom;
}
//   把上诉虚拟Dom转化成下方真实Dom
//   <div id="app">
//     <span>
//       <a></a>
//     </span>
//     <span>
//       <a></a>
//       <a></a>
//     </span>
//   </div>
console.log("====vdom2rdom====", vdom2rdom(vdom));

```

## 说明

该示例展示了不同语言中JSON 格式的虚拟 Dom 怎么转换成真实 Dom的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
