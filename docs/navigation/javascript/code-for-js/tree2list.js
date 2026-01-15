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
