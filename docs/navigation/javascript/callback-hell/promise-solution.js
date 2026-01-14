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
