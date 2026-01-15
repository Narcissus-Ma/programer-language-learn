// title: 发布订阅模式
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // 实现订阅
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }

  // 触发事件
  emit(eventName, ...args) {
    this.events[eventName] &&
      this.events[eventName].forEach((fn) => {
        fn.apply(this, args);
      });
  }

  // 删除订阅
  off(eventName, callback) {
    if (!this.events[eventName]) return;
    this.events[eventName] = this.events[eventName].filter(
      (item) => item !== callback
    );
    console.log("====this.events====", this.events);
  }
}
const eventEntity = new EventEmitter();
const handle = (...args) => console.log("====args====", args);
eventEntity.on("click", handle);
eventEntity.emit("click", 1, 2, 3, 4);
eventEntity.off("click", handle);
eventEntity.emit("click", 1, 2);
