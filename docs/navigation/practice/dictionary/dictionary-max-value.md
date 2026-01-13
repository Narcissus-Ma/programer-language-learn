# 字典最大最小值

## Python 示例

以下是Python中字典最大最小值的示例代码：

```py
# title: 字典最大最小值
my_dict = {'a': 10, 'b': 20, 'c': 5}
max_key = max(my_dict, key=my_dict.get)
# max_key = max(my_dict, key=lambda k: my_dict[k])
max_value = my_dict[max_key]
print(f"Key with maximum value: {max_key}, Maximum value: {max_value}")

# 最小值
min_key = min(my_dict, key=my_dict.get)  

# 排序
sorted_items = sorted(my_dict.items(), key=lambda x: x[1],reverse=True)
print(sorted_items)

# 找出列表中长度最长的字符串
words = ['apple', 'banana', 'orange', 'peach']
max_word = max(words, key=len)
print(max_word)
```

## 说明

该示例展示了不同语言中字典最大最小值的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
