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