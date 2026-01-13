# 检查一个字符串是否是数字

## Python 示例

以下是Python中检查一个字符串是否是数字的示例代码：

```py
# title: 检查一个字符串是否是数字
def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        pass
    try:
        import unicodedata
        unicodedata.numeric(s)
        return True
    except (TypeError, ValueError):
        pass
    return False

print(is_number('123'))
print(is_number('123.456'))
print(is_number('-123.456'))

```

## 说明

该示例展示了不同语言中检查一个字符串是否是数字的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
