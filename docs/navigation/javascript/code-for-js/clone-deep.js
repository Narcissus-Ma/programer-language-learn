// title: 实现深拷贝的方法 Json序列化, lodash, 手写递归实现
// 实现深拷贝的方法 Json序列化, lodash, 手写递归实现
// Json序列化的缺点，循环引用无法解决，函数无法解决
// 手写深拷贝
function isObject(val) {
  return typeof val === "object" && val !== null;
}
function cloneDeep(obj) {
  // 判断传入的是不是对象，是对象就递归调用，不是就赋值给新的obj
  if (!isObject(obj)) return obj;
  const newObj = Array.isArray(obj) ? [] : {};
  if (isObject(obj)) {
    Object.keys(obj).forEach((key) => {
      if (isObject(obj[key])) {
        newObj[key] = cloneDeep(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    });
  }
  return newObj;
}
const obj = {
  a: "1",
  b: {
    c: [1, 2, 3],
  },
  d: [4, 5, 6],
  e: () => console.log("===function==="),
  f: null,
};
// console.log(Object.keys(obj));
// console.log(JSON.parse(JSON.stringify(obj)));
// console.log(typeof obj.d);
// for (let key in obj) {
//   console.log(key);
// }
console.log(cloneDeep(obj));
