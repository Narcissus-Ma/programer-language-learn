# 计算阶乘

## Python 示例

以下是Python中计算阶乘的示例代码：

```py
# title: 计算阶乘
num = 12
factorial = 1
 
# 查看数字是负数，0 或 正数
if num < 0:
   print("抱歉，负数没有阶乘")
elif num == 0:
   print("0 的阶乘为 1")
else:
   for i in range(1,num + 1):
       factorial = factorial*i
   print("%d 的阶乘为 %d" %(num,factorial))
```

## 说明

该示例展示了不同语言中计算阶乘的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
