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


