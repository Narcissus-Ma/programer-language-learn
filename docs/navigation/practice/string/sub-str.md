# 判断字符串是否包含子字符串

## Python 示例

以下是Python中判断字符串是否包含子字符串的示例代码：

```py
# title: 判断字符串是否包含子字符串
test_str = "hello world"

def contains_substring_1(str, substr):
    return substr in str

def contains_substring_2(str, substr):
    return str.find(substr) != -1

print(contains_substring_1(test_str, "world"))
print(contains_substring_2(test_str, "world"))

```

## 说明

该示例展示了不同语言中判断字符串是否包含子字符串的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
