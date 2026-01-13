# 查找列表中的第二大元素

## Python 示例

以下是Python中查找列表中的第二大元素的示例代码：

```py
# title: 查找列表中的第二大元素
def find_second_largest(lst):
    # 首先去除列表中的重复元素
    unique_lst = list(set(lst))
    # 对列表进行排序
    unique_lst.sort()
    # 返回倒数第二个元素
    return unique_lst[-2]

# 示例列表
numbers = [10, 20, 4, 45, 99, 99]
# 调用函数
second_largest = find_second_largest(numbers)
print("第二大的元素是:", second_largest)
```

## 说明

该示例展示了不同语言中查找列表中的第二大元素的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
