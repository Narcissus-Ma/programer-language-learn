# Promise方法 */

## JavaScript 示例

以下是JavaScript中Promise方法 */的示例代码：

```js
/* title: Promise方法 */
// 方案三，Promise方法

const createTimer = (callback, delay) => {
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    };
};

const getPromise = (data,time) => {      
    return new Promise((resolve, reject) => {
        const timer1= createTimer(() => {
            resolve(data);
        }, time);
        timer1();
    });
};

const promise1 = getPromise(111, 3000);
promise1.then((res)=>{
    console.log(res);
    const promise2 = getPromise(222, 2000);
    return promise2;
}).then((res)=>{
    console.log(res);
    const promise3 = getPromise(333, 1000);
    return promise3;
}).then((res)=>{
    console.log(res);
});

```

## 说明

该示例展示了不同语言中Promise方法 */的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
