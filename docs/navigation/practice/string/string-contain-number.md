# 检查一个字符串是否包含数字

## Python 示例

以下是Python中检查一个字符串是否包含数字的示例代码：

```py
# title: 检查一个字符串是否包含数字
def contains_number(s):
    return any(char.isdigit() for char in s)

# 测试
test_string = "Hello123"
if contains_number(test_string):
    print("字符串包含数字")
else:
    print("字符串不包含数字")
```

## 说明

该示例展示了不同语言中检查一个字符串是否包含数字的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
