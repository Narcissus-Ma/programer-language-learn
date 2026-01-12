# 列表推导式

## Python 列表推导式示例

以下是Python中列表推导式的示例代码：

```py
# 列表推导式示例
# 1. 基本列表推导式
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 生成平方数列表
squares = [x ** 2 for x in numbers]
print("平方数列表:", squares)

# 2. 带条件的列表推导式
# 生成偶数列表
even_numbers = [x for x in numbers if x % 2 == 0]
print("偶数列表:", even_numbers)

# 生成奇数的立方列表
odd_cubes = [x ** 3 for x in numbers if x % 2 != 0]
print("奇数的立方列表:", odd_cubes)

# 3. 多个条件的列表推导式
# 生成1-10中大于3且小于8的数
filtered_numbers = [x for x in numbers if x > 3 and x < 8]
print("大于3且小于8的数:", filtered_numbers)

# 4. 嵌套列表推导式
# 将二维列表转换为一维列表
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [x for row in matrix for x in row]
print("二维列表展开:", flattened)

# 生成乘法表
multiplication_table = [[i * j for j in range(1, 6)] for i in range(1, 6)]
print("乘法表:")
for row in multiplication_table:
    print(row)

# 5. 字符串列表推导式
words = ["apple", "banana", "cherry", "date", "elderberry"]

# 生成大写字母开头的单词列表
capitalized = [word.capitalize() for word in words]
print("大写开头的单词:", capitalized)

# 生成单词长度列表
word_lengths = [len(word) for word in words]
print("单词长度:", word_lengths)

# 6. 使用enumerate的列表推导式
# 生成带索引的元组列表
indexed_words = [(index, word) for index, word in enumerate(words)]
print("带索引的单词:", indexed_words)

# 7. 字典推导式
# 生成单词到长度的映射
dict_word_lengths = {word: len(word) for word in words}
print("单词长度字典:", dict_word_lengths)

# 8. 集合推导式
# 生成唯一的单词长度集合
unique_lengths = {len(word) for word in words}
print("唯一长度集合:", unique_lengths)
```

## 说明

该示例展示了Python中列表推导式的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../../index.md)
- [语言对比](../../comparisons/)
