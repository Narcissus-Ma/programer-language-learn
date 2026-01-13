# 字典相关用法

## Python 示例

以下是Python中字典相关用法的示例代码：

```py
# title: 字典相关用法
def dictionary_sort():  
  
    # 声明字典
    key_value ={}     
 
    # 初始化
    key_value[2] = 56       
    key_value[1] = 2 
    key_value[5] = 12 
    key_value[4] = 24
    key_value[6] = 18      
    key_value[3] = 323    
 
    # sorted(key_value) 返回重新排序的列表
    result = [(i, key_value[i]) for i in sorted (key_value)]
    print("按键(key)排序:", result)

    # 按值排序
    result = sorted(key_value.items(), key = lambda kv:(kv[1], kv[0]))
    print("按值排序:", result)

    # js 类似语法
    # const key_value = {2: 56, 1: 2, 5: 12, 4: 24, 6: 18, 3: 323};
    # const result = Object.entries(key_value).sort((a, b) => a[0] - b[0]);

def dictionary_add(myDict):
    sum = 0
    for i in myDict: 
        sum = sum + myDict[i]
    return sum

# 删除字典键值对
def dictionary_delete_items(myDict, key):
    if key in myDict:
        del myDict[key]
    return myDict

def dictionary_delete_items_by_pop(myDict,key):
    if key in myDict:
        myDict.pop(key)
    return myDict

def dictionary_delete_items_by_filter(myDict, ori_key):
    new_dict = {key: val for key, val in myDict.items() if key != ori_key}
    return new_dict

# 合并字典
# 解包操作符
def dictionary_merge(myDict1, myDict2):
    new_dict = {**myDict1, **myDict2}
    return new_dict


def dictionary_merge_by_update(myDict1, myDict2):
    myDict1.update(myDict2)
    return myDict1

def dictionary_merge_by_merge(myDict1, myDict2):
    new_dict = myDict1 | myDict2
    return new_dict
  
def main(): 
    # 调用函数
    # dictionary_sort()
    test_dict = {"Runoob" : 1, "Google" : 2, "Taobao" : 3, "Zhihu" : 4}
    test_dict2 = {"Facebook" : 5, "LinkedIn" : 6}
    # dictionary_delete_items(test_dict, "Zhihu")
    # dictionary_delete_items_by_pop(test_dict, "Zhihu")
    # result = dictionary_delete_items_by_filter(test_dict, "Zhihu")
    # result = dictionary_merge(test_dict, test_dict2)
    # result = dictionary_merge_by_update(test_dict, test_dict2)
    result = dictionary_merge_by_merge(test_dict, test_dict2)
    print(result)
                  
      
# 主函数
if __name__=="__main__":      
    main()
```

## 说明

该示例展示了不同语言中字典相关用法的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
