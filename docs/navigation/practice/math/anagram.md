# 检查两个字符串是否是变位词（字母重新排列后形成的新单词）

## Python 示例

以下是Python中检查两个字符串是否是变位词（字母重新排列后形成的新单词）的示例代码：

```py
# title: 检查两个字符串是否是变位词（字母重新排列后形成的新单词）
def is_anagram(str1, str2):
    # 移除空格并将字符串转换为小写
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()

    # 检查两个字符串的长度是否相同
    if len(str1) != len(str2):
        return False

    # 对字符串进行排序并比较
    return sorted(str1) == sorted(str2)

# 测试
print(is_anagram("listen", "silent"))  # True
print(is_anagram("triangle", "integral"))  # True
print(is_anagram("apple", "pale"))  # False
```

## 说明

该示例展示了不同语言中检查两个字符串是否是变位词（字母重新排列后形成的新单词）的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
