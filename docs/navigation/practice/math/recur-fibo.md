# 递归实现斐波那契数列

## Python 示例

以下是Python中递归实现斐波那契数列的示例代码：

```py
# title: 递归实现斐波那契数列   
def recur_fibo(n):
   """递归函数
   输出斐波那契数列"""
   if n <= 1:
       return n
   else:
       return(recur_fibo(n-1) + recur_fibo(n-2))

print(recur_fibo(10))
```

## 说明

该示例展示了不同语言中递归实现斐波那契数列的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
