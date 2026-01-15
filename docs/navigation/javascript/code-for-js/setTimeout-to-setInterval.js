// title: setTimeout 实现 setInterval
// setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗
// 递归实现
function mySetTimeout(fn, t) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, t);
  }
  interval();
  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}
// setInterval 实现 setTimeout
const mySetTimeout = (fn, time) => {
  const timer = setInterval(() => {
    clearInterval(timer);
    fn();
  }, time);
};
