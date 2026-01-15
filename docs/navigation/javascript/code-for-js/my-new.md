# 实现一个 new 操作符

## JavaScript 示例

以下是JavaScript中实现一个 new 操作符的示例代码：

```js
// title: 实现一个 new 操作符
/**
 * 思路：
 * 创建一个对象
 * 绑定原型
 * 执行构造函数
 * 判断构造函数返回值是否为对象
 */
function myNew() {
  const obj = new Object();
  const fn = Array.prototype.shift.call(arguments);
  obj.__proto__ = fn.prototype;
  const res = fn.apply(obj, arguments);
  return typeof res === "object" ? res : obj;
}

function myNew2(fn, ...args) {
  const obj = new Object();
  obj.__proto__ = fn.prototype;
  const res = fn.apply(obj, args);
  return typeof res === "object" ? res : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();

```

## 说明

该示例展示了不同语言中实现一个 new 操作符的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
