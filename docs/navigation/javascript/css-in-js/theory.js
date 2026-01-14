// title: styleComponent 中 css in js 的实现原理
function upperCase(strings, ...values) {
  let result = "";
  strings.forEach((str, i) => {
    if (i > 0) {
      result += String(values[i - 1]).toUpperCase();
    }
    result += str;
  });
  return result;
}

const name = "rocky";
const age = 18;
const str = upperCase`my name is ${name}, i'm ${age} years old.`;
console.log(str);
