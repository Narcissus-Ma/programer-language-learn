// title: 数字转字符串
// 1234567890 1,234,567,890
function num2string(num) {
  const res = [];
  const _num = String(num).split("").reverse();
  for (let i = 0; i < _num.length; i++) {
    if (i && i % 3 === 0) {
      res.push(",");
    }
    res.push(_num[i]);
  }
  console.log(res.reverse().join(""));
}
num2string(1234567890);
