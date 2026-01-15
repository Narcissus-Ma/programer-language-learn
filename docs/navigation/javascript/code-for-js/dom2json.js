// title: 把一个 DOM 节点输出 JSON 的格式
// 请实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式
function dom2Json(domtree) {
  let obj = {};
  obj.name = domtree.tagName;
  obj.children = [];
  domtree.childNodes.forEach((child) => obj.children.push(dom2Json(child)));
  return obj;
}
