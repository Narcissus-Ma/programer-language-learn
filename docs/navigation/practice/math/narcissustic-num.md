# Narcissistic 数

## Python 示例

以下是Python中Narcissistic 数的示例代码：

```py
# title: Narcissistic 数
def is_narcissistic_number(num):
    num_str = str(num)
    num_len = len(num_str)
    return num == sum(int(digit)**num_len for digit in num_str)
#  Narcissistic 数是指一个数，它的每个位上的数字的立方和等于它本身。
# 例如，153 是一个 Narcissistic 数，因为 1^3 + 5^3 + 3^3 = 153。
print(is_narcissistic_number(153))
print(is_narcissistic_number(370))
print(is_narcissistic_number(9474))
print(is_narcissistic_number(123))
```

## 说明

该示例展示了不同语言中Narcissistic 数的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
