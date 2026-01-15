// title: 手写call apply bind
// 给obj添加属性，将该属性设置为this, 执行该属性函数，返回执行结果
function myCall(obj, ...args) {
  if (typeof this !== "function") {
    throw new Error("调用对象只能是函数");
  }
  obj = obj || window;
  const fn = Symbol();
  obj[fn] = this;
  const res = obj[fn](...args);
  Reflect.deleteProperty(obj, "fn");
  return res;
}

function myApply(obj, args) {
  if (typeof this !== "function") {
    throw new Error("调用对象只能是函数");
  }
  obj = obj || window;
  const fn = Symbol();
  obj[fn] = this;
  const res = obj[fn](...args);
  Reflect.deleteProperty(obj, "fn");
  return res;
}

// 手写bind简化版本
function myBind(obj, ...args) {
  if (typeof this !== "function") {
    throw new Error("调用对象只能是函数");
  }
  const self = this;
  const bindArgs = args;
  return function (...args) {
    const res = self.apply(obj || window, [...bindArgs, args]);
    return res;
  };
}

// 手写bind详细版本
/**
 * 注意三点：
 * 1.分步传参
 * 2.构造失效
 * 3.绑定原型中转
 */

Function.prototype.MyBind = function (context) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }

  // 执行的函数
  var self = this;
  // 第一次传入的参数
  var args = Array.prototype.slice.call(arguments, 1);

  // 中转函数
  var fNOP = function () {};

  // 返回的函数
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };

  // 绑定原型
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
