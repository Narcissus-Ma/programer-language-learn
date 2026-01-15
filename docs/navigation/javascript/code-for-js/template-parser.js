// title: 实现模板字符串解析功能
function templateParser(template, data) {
  const reg = /\{\{(\w+)\}\}/g;
  const computed = template.replace(reg, (match, key) => {
    return data[key];
  });
  return computed;
}

let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let data = {
  name: "张三",
  age: 18,
  sex: "male",
};
const res = templateParser(template, data);
console.log(res);
