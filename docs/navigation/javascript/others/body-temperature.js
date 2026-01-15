// title: 随机生成生常体温
const temperature = () => {
  const num = (36.3 + Math.random() * 0.4).toFixed(1);
  console.log("Your temperature is " + num);
};

temperature();
