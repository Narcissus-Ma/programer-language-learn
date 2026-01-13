# list的map与filter方法

## Python 示例

以下是Python中list的map与filter方法的示例代码：

```py
# title: list的map与filter方法
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_number = list(filter(lambda x: x % 2 == 0, number))
# doubled_even_numbers = list(map(lambda x: x * 2, even_number))
doubled_even_numbers = map(lambda x: x * 2, even_number)
print(list(doubled_even_numbers))

```

## 说明

该示例展示了不同语言中list的map与filter方法的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
