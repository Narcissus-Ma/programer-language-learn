# 列表遍历方法对比

本文对比了JavaScript、Python和Java三种语言中列表（数组）遍历的不同方法，包括语法特点、适用场景和性能考量。

## 1. JavaScript

JavaScript中常用的数组遍历方法有以下几种：

### for循环
```js:docs/examples/js/array-traversal.js
for (let i = 0; i < arr.length; i++) {
  console.log(`索引 ${i}: ${arr[i]}`);
}
```

### forEach方法
```js:docs/examples/js/array-traversal.js
arr.forEach((element, index) => {
  console.log(`索引 ${index}: ${element}`);
});
```

### for...of循环
```js:docs/examples/js/array-traversal.js
for (const element of arr) {
  console.log(element);
}
```

### map方法
```js:docs/examples/js/array-traversal.js
const doubled = arr.map(element => element * 2);
console.log('数组翻倍:', doubled);
```

### filter方法
```js:docs/examples/js/array-traversal.js
const evenNumbers = arr.filter(element => element % 2 === 0);
console.log('偶数:', evenNumbers);
```

### reduce方法
```js:docs/examples/js/array-traversal.js
const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log('数组总和:', sum);
```

## 2. Python

Python中常用的列表遍历方法有以下几种：

### for循环
```python
numbers = [1, 2, 3, 4, 5]
for i in range(len(numbers)):
    print(f"索引 {i}: {numbers[i]}")
```

### for...in循环
```python
for number in numbers:
    print(number)
```

### enumerate函数
```python
for index, number in enumerate(numbers):
    print(f"索引 {index}: {number}")
```

### 列表推导式
```python:docs/examples/python/list-comprehension.py
squares = [x ** 2 for x in numbers]
print("平方数列表:", squares)
```

### map函数
```python
doubled = list(map(lambda x: x * 2, numbers))
print("数字翻倍:", doubled)
```

### filter函数
```python
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print("偶数列表:", even_numbers)
```

### reduce函数
```python
from functools import reduce

sum_result = reduce(lambda x, y: x + y, numbers)
print("数字总和:", sum_result)
```

## 3. Java

Java中常用的列表遍历方法有以下几种：

### for循环
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
for (int i = 0; i < numbers.size(); i++) {
    System.out.println("索引 " + i + ": " + numbers.get(i));
}
```

### 增强for循环
```java
for (int number : numbers) {
    System.out.println(number);
}
```

### Iterator迭代器
```java
Iterator<Integer> iterator = numbers.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
```

### forEach方法（Java 8+）
```java:docs/examples/java/stream-api.java
numbers.forEach(System.out::println);
```

### Stream API（Java 8+）
```java:docs/examples/java/stream-api.java
// 过滤出偶数
List<Integer> evenNumbers = numbers.stream()
        .filter(n -> n % 2 == 0)
        .collect(Collectors.toList());
System.out.println("偶数：" + evenNumbers);

// 将每个数字乘以2
List<Integer> doubled = numbers.stream()
        .map(n -> n * 2)
        .collect(Collectors.toList());
System.out.println("数字翻倍：" + doubled);
```

## 4. 对比分析

| 语言 | 遍历方法 | 特点 | 适用场景 |
|------|----------|------|----------|
| JavaScript | for循环 | 传统方式，灵活性高 | 需要精确控制索引和遍历过程 |
| JavaScript | forEach | 函数式风格，简洁 | 不需要返回新数组的遍历 |
| JavaScript | for...of | 简洁，可读性好 | 只需要遍历元素，不关心索引 |
| JavaScript | map | 函数式风格，返回新数组 | 需要根据原数组生成新数组 |
| Python | for...in | 简洁，可读性好 | 遍历可迭代对象 |
| Python | enumerate | 同时获取索引和元素 | 需要同时使用索引和元素 |
| Python | 列表推导式 | 简洁高效 | 生成新列表 |
| Java | 增强for循环 | 简洁，可读性好 | 遍历集合元素 |
| Java | Stream API | 函数式风格，并行处理 | 复杂的数据处理和转换 |

## 5. 性能考量

- **JavaScript**：
  - `for` 循环性能最好，尤其是缓存了数组长度的情况下
  - `forEach` 和 `for...of` 性能次之，但可读性更好
  - `map`、`filter` 等函数式方法在处理大量数据时性能稍差

- **Python**：
  - 列表推导式性能最好，因为它是在C层面实现的
  - `for...in` 循环性能次之
  - `map`、`filter` 等函数式方法性能通常不如列表推导式

- **Java**：
  - 增强for循环性能较好
  - Stream API在处理大量数据时可以利用并行处理提高性能
  - 传统for循环在需要频繁访问索引时性能较好

## 6. 选择建议

1. 优先考虑代码的可读性和可维护性
2. 根据具体需求选择合适的遍历方法
3. 对于大量数据处理，考虑使用各语言中性能最优的方法
4. 函数式编程风格（如map、filter）可以使代码更简洁，但要注意性能影响
5. 在Java中，Stream API提供了强大的数据处理能力，适合复杂的数据转换和过滤

通过了解不同语言的列表遍历方法，我们可以在实际开发中根据具体需求选择最合适的方式，提高代码的效率和可读性。