# 数组遍历

## JavaScript 数组遍历示例

以下是JavaScript中数组遍历的示例代码：

```js
// 数组遍历示例
// 1. for循环遍历
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(`索引 ${i}: ${arr[i]}`);
}

// 2. forEach方法
arr.forEach((element, index) => {
  console.log(`索引 ${index}: ${element}`);
});

// 3. for...of循环
for (const element of arr) {
  console.log(element);
}

// 4. map方法（返回新数组）
const doubled = arr.map(element => element * 2);
console.log('数组翻倍:', doubled);

// 5. filter方法（过滤元素）
const evenNumbers = arr.filter(element => element % 2 === 0);
console.log('偶数:', evenNumbers);

// 6. reduce方法（累加）
const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log('数组总和:', sum);

// 7. some方法（是否存在满足条件的元素）
const hasEven = arr.some(element => element % 2 === 0);
console.log('是否存在偶数:', hasEven);

// 8. every方法（是否所有元素都满足条件）
const allPositive = arr.every(element => element > 0);
console.log('是否所有元素都是正数:', allPositive);
```

## 说明

该示例展示了JavaScript中数组遍历的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../../index.md)
- [语言对比](../../comparisons/)
