# 字符串反转

## Python 示例

以下是Python中字符串反转的示例代码：

```py
# title: 字符串反转
ori_str = "hello world"
def reverse_string_1(str):
    return str[::-1]

def reverse_string_2(str):
    new_str = ""
    for i in range(len(str)):
        new_str += str[len(str)-1-i]
    return new_str

def reverse_string_3(str):
    return "".join(reversed(str))

print(reverse_string_1(ori_str))
print(reverse_string_2(ori_str))
print(reverse_string_3(ori_str))
```

## 说明

该示例展示了不同语言中字符串反转的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
