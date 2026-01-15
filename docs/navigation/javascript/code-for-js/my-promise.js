// title: 手写Promise及其相关方法
class MyPromise {
  constructor(executor) {
    this.initValue();
    this.initBind();
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  initValue() {
    this.PromiseResult = null; // 终值
    this.PromiseState = "pending"; // 状态
    this.onFulfilledCallbacks = []; // 保存成功的回调
    this.onRejectedCallbacks = []; // 保存失败的回调
  }
  initBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }
  resolve(value) {
    if (this.PromiseState !== "pending") return;
    this.PromiseResult = value;
    this.PromiseState = "fulfilled";
    while (this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()(this.PromiseResult);
    }
  }
  reject(reason) {
    if (this.PromiseState !== "pending") return;
    this.PromiseResult = reason;
    this.PromiseState = "rejected";
    while (this.onRejectedCallbacks.length) {
      this.onRejectedCallbacks.shift()(this.PromiseResult);
    }
  }
  then(onFulfilled, onRejected) {
    // 参数校验
    if (typeof onFulfilled !== "function") {
      onFulfilled = (val) => val;
    }
    if (typeof onRejected !== "function") {
      onRejected = (reason) => {
        throw reason;
      };
    }
    const thenPromise = new Promise((resolve, reject) => {
      const resolvePromise = (cb) => {
        setTimeout(() => {
          try {
            const res = cb(this.PromiseResult);
            if (res === thenPromise) {
              throw new Error("不能返回自身");
            } else if (res instanceof MyPromise) {
              res.then(resolve, reject);
            } else {
              resolve(res);
            }
          } catch (error) {
            reject(error);
            throw new Error(err);
          }
        }, 0);
      };

      if (this.PromiseState === "fulfilled") {
        resolvePromise(onFulfilled);
      } else if (this.PromiseResult === "rejected") {
        resolvePromise(onRejected);
      } else {
        this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled));
        this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected));
      }
    });
    return thenPromise;
  }
  all(promises) {
    // 参数校验 promise必须为数组
    if (!Array.isArray(promises)) {
      throw new Error("promise must be an promise array");
    }
    const result = [];
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => {
              result.push(res);
            },
            (err) => reject(err)
          );
        } else {
          result.push(promise);
        }
      });
      if (result.length === promises.length) {
        resolve(result);
      }
    });
  }
  race(promises) {
    // 参数校验 promise必须为数组
    if (!Array.isArray(promises)) {
      throw new Error("promise must be an promise array");
    }
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => resolve(res),
            (err) => reject(err)
          );
        } else {
          resolve(promise);
        }
      });
    });
  }
  // 与all的区别，成功或失败的数据都保存返回，只有成功没有失败
  allSettled(promises) {
    // 参数校验 promise必须为数组
    if (!Array.isArray(promises)) {
      throw new Error("promise must be an promise array");
    }
    let count = 0;
    const result = [];
    return new MyPromise((resolve, _reject) => {
      promises.forEach((promise) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => {
              result.push({ status: "fulfilled", value: res });
              count++;
            },
            (err) => {
              result.push({ status: "rejected", value: err });
              count++;
            }
          );
        } else {
          result.push({ status: "fulfilled", value: promise });
          count++;
        }
      });
      if (count.length === promises.length) {
        resolve(result);
      }
    });
  }
  // 与race的区别，所有返回结果失败才记录失败？？？
  any(promises) {
    // 参数校验 promise必须为数组
    if (!Array.isArray(promises)) {
      throw new Error("promise must be an promise array");
    }
    return new MyPromise((resolve, reject) => {
      let count = 0;
      promises.forEach((promise) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => resolve(res),
            (err) => {
              count++;
              if (count === promises.length) {
                reject(err);
              }
            }
          );
        } else {
          resolve(promise);
        }
      });
    });
  }
}

const promiseInstance = new Promise((resolve, reject) => {});
