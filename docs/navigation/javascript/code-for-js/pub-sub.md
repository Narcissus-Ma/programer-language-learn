# 发布订阅模式

## JavaScript 示例

以下是JavaScript中发布订阅模式的示例代码：

```js
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

```

## 说明

该示例展示了不同语言中发布订阅模式的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
