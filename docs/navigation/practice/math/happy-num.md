# 快乐数

## Python 示例

以下是Python中快乐数的示例代码：

```py
# title: 快乐数
# 快乐数是指一个数，通过将其每个位上的数字平方并求和，最终得到1。
# 例如，19 是一个快乐数，因为 1^2 + 9^2 = 82，8^2 + 2^2 = 68，6^2 + 8^2 = 100，1^2 + 0^2 + 0^2 = 1。
def is_happy_number(num):
    seen = set()
    while num != 1 and num not in seen:
        seen.add(num)
        num = sum(int(digit)**2 for digit in str(num))
    return num == 1

print(is_happy_number(19))
print(is_happy_number(2))
```

## 说明

该示例展示了不同语言中快乐数的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
