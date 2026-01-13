# 列表去重

## Python 示例

以下是Python中列表去重的示例代码：

```py
# title: 列表去重
original_list = [1, 2, 2, 3, 4, 4, 5]

def remove_duplicates_1(lst):
    return list(set(lst))

def remove_duplicates_2(lst):
    new_lst = []
    for i in lst:
        if i not in new_lst:
            new_lst.append(i)
    return new_lst

def remove_duplicates_3(lst):
    return list(dict.fromkeys(lst))

def remove_duplicates_4(lst):
    re = {}
    for i in lst:
        re[i] = 1
    # return list(re.keys())
    # return list(re.values())
    # return list(re.items())
    return list(re) 

def remove_duplicates_5(lst):
    unique_list = []
    [unique_list.append(item) for item in lst if item not in unique_list]
    return unique_list

print(remove_duplicates_4(original_list))

# 删除两个列表中的重复元素
list_1 = [1, 2, 1, 4, 6]
list_2 = [7, 8, 2, 1]

def remove_duplicates_6(lst_1, lst_2):
    return list(set(lst_1) ^ set(lst_2))

# print(remove_duplicates_6(list_1, list_2))



```

## 说明

该示例展示了不同语言中列表去重的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
