# 时间戳格式化

## JavaScript 示例

以下是JavaScript中时间戳格式化的示例代码：

```js
// title: 时间戳格式化
let formaTimestamp = (timestamp, template, splitChar) => {
  const date = new Date(Number(timestamp));
  // 时间映射对象
  const dateMap = {
    YYYY: date.getFullYear(),
    MM: date.getMonth(),
    DD: date.getDate(),
    hh: date.getHours(),
    mm: date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes(),
    ss: date.getSeconds() > 10 ? date.getSeconds() : "0" + date.getSeconds(),
  };

  const ymd = template.split(" ")[0];
  const hms = template.split(" ")[1];
  const YYYY = ymd.split("-")[0];
  const MM = ymd.split("-")[1];
  const DD = ymd.split("-")[2];
  const hh = hms.split(":")[0];
  const mm = hms.split(":")[1];
  const ss = hms.split(":")[2];

  const result =
    (dateMap[YYYY] || "") +
    (dateMap[MM] ? splitChar : "") +
    (dateMap[MM] || "") +
    (dateMap[DD] ? splitChar : "") +
    (dateMap[DD] || "") +
    " " +
    (dateMap[hh] || "") +
    (dateMap[mm] ? ":" : "") +
    (dateMap[mm] || "") +
    (dateMap[ss] ? ":" : "") +
    (dateMap[ss] || "");

  return result;
};

// const res = formaTimestamp("1663247113453", "YYYY hh:mm", "/");

// console.log("==res==", res);

```

## 说明

该示例展示了不同语言中时间戳格式化的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
