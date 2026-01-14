# async&&await */

## JavaScript 示例

以下是JavaScript中async&&await */的示例代码：

```js
/* title: async&&await */
// 方案四 async&&await
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

const AsyncFunction = async () => {
    const res1 = await getPromise(111, 3000);
    console.log(res1);
    const res2 = await getPromise(222, 2000);
    console.log(res2);
    const res3 = await getPromise(333, 1000);
    console.log(res3);
};

AsyncFunction();
```

## 说明

该示例展示了不同语言中async&&await */的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
