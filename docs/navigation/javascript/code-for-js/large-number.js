// title: 大数相加
function outOfRangeAdd(a, b) {
  let maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, 0);
  b = b.padStart(maxLength, 0);
  console.log(a, b);
  let t = 0,
    f = 0,
    sum = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }
  if (f !== 0) {
    sum = "" + f + sum;
  }
  return sum;
}

let a = "9007199254740991",
  b = "1234567899999999999";

console.log(outOfRangeAdd(a, b));
