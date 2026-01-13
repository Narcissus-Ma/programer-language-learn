# 检查一个数是否是完全数

## Python 示例

以下是Python中检查一个数是否是完全数的示例代码：

```py
# title: 检查一个数是否是完全数
# 完全数是指一个数等于它的所有真因子（除了自身以外的因子）之和。例如，6 是一个完全数，因为它的真因子是 1, 2, 3，而 1 + 2 + 3 = 6。
def is_perfect_number(number):
    if number < 1:
        return False
    factors = [i for i in range(1, number) if number % i == 0]
    return sum(factors) == number
```

## 说明

该示例展示了不同语言中检查一个数是否是完全数的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
