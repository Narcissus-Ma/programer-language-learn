# 查找符合条件的元素

## Python 示例

以下是Python中查找符合条件的元素的示例代码：

```py
# title: 查找符合条件的元素
def find_elements_by_condition(elements, condition):
    return [element for element in elements if condition(element)]

def is_even(number):
    return number % 2 == 0

def is_odd(number):
    return number % 2 != 0

even_numbers = find_elements_by_condition([1, 2, 3, 4, 5, 6], is_even)
print(even_numbers)

odd_numbers = find_elements_by_condition([1, 2, 3, 4, 5, 6], is_odd)
print(odd_numbers)
```

## 说明

该示例展示了不同语言中查找符合条件的元素的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
