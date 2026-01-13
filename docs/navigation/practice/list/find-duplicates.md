# 列表去重

## Python 示例

以下是Python中列表去重的示例代码：

```py
# title: 列表去重
def find_duplicates(lst):
    seen = set()
    duplicates = set()
    for item in lst:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)
    return list(duplicates)

# 示例列表
my_list = [1, 2, 3, 2, 4, 5, 3, 6, 7, 8, 7]
print(find_duplicates(my_list))
```

## 说明

该示例展示了不同语言中列表去重的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
