# 简单异步调度器的实现

## JavaScript 示例

以下是JavaScript中简单异步调度器的实现的示例代码：

```js
// title: 简单异步调度器的实现
// js实现一个带并发限制的异步调度器Scheduler,保证同时运行的任务最多两个
class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.maxCount = limit;
    this.runCounts = 0;
  }
  // 添加任务
  add(time, order) {
    const promiseCreator = () => {
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          console.log(order);
          resolve();
        }, time);
      });
    };
    this.queue.push(promiseCreator);
  }
  // 任务开始
  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }
  // 任务执行
  request() {
    if (!this.queue.length || this.runCounts >= this.maxCount) {
      return;
    }
    this.runCounts++;
    this.queue
      .shift()()
      .then(() => {
        this.runCounts--;
        this.request();
      });
  }
}

const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();

```

## 说明

该示例展示了不同语言中简单异步调度器的实现的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
