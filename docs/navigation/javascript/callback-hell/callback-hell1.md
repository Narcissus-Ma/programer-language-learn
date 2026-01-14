# 回调地狱 */

## JavaScript 示例

以下是JavaScript中回调地狱 */的示例代码：

```js
/* title: 回调地狱 */
// 方案二，方案一的改进
const createTimer = (callback, delay) => {
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    };
};

const timer1 = createTimer(() => {
    console.log(111);
    const timer2 = createTimer(() => {
        console.log(222);
        const timer3 = createTimer(() => {
            console.log(333);
        }, 1000); 
        timer3();
    }, 2000); 
    timer2();
}, 3000);
timer1();



```

## 说明

该示例展示了不同语言中回调地狱 */的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
