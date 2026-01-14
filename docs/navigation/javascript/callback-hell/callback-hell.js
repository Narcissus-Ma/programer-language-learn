/* title: 回调地狱 */
// 方案一
setTimeout(() => {
    console.log(111);
    setTimeout(() => {
        console.log(222);
        setTimeout(() => {
            console.log(333);
        }, 1000);
    }, 2000);
}, 3000);
