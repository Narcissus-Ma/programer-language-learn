// title: 实现一个 instanceof 方法
function myInstanceof(left, right) {
  while (true) {
    if (left === null) {
      return false;
    }
    if (left.__proto__ === right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
}

// 思路一样，下面更严谨
function myInstanceof(left, right) {
  // 参数校验
  // left必须是对象
  if (typeof left !== "object" || left === null) return false;
  // right必须是函数
  if (typeof right !== "function") {
    throw new TypeError("origin must be function/construnctor/class");
  }
  // 获取 left的隐式原型
  let proto = Object.getPrototypeOf(left);
  while (proto) {
    if (proto === right.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
