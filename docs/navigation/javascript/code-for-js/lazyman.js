// title: 实现一个LazyMan类
class _LazyMan {
  constructor(name) {
    this.tasks = [];
    const task = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    };
    this.tasks.push(task);
    setTimeout(() => {
      this.next();
    }, 0);
  }
  next() {
    const task = this.tasks.shift();
    task && task();
  }
  sleep(time) {
    this._sleepWrapper(time, false);
    return this;
  }
  _sleepWrapper(time, first) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    if (first) {
      this.tasks.unshift(task);
    } else {
      this.tasks.push(task);
    }
  }
  sleepFirst(time) {
    this._sleepWrapper(time, true);
    return this;
  }
  eat(name) {
    const task = () => {
      console.log(`Eat ${name}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}
const LazyMan = (name) => new _LazyMan(name);

// 测试
// LazyMan("Hank")
// LazyMan("Hank").sleep(10).eat("dinner");
// LazyMan("Hank").eat("dinner").eat("supper");
// LazyMan("Hank").sleepFirst(5).eat("dinner");
