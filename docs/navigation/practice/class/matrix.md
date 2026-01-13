# 简单矩阵运算

## Python 示例

以下是Python中简单矩阵运算的示例代码：

```py
# title: 简单矩阵运算
class Matrix:
    def __init__(self, data):
        self.data = data
        self.rows = len(data)
        self.cols = len(data[0]) if self.rows > 0 else 0

    def add(self, other):
        if self.rows != other.rows or self.cols != other.cols:
            raise ValueError("Matrices must have the same dimensions")
        result = [[self.data[i][j] + other.data[i][j] for j in range(self.cols)] for i in range(self.rows)]
        return Matrix(result)

    def mul(self, other):
        if self.cols != other.rows:
            raise ValueError("Matrices must have compatible dimensions for multiplication")
        result = [[sum(self.data[i][k] * other.data[k][j] for k in range(self.cols)) for j in range(other.cols)] for i in range(self.rows)]
        return Matrix(result)

    def transpose(self):
        result = [[self.data[j][i] for j in range(self.rows)] for i in range(self.cols)]
        return Matrix(result)

    def __str__(self):
        return "\n".join([" ".join(map(str, row)) for row in self.data])
```

## 说明

该示例展示了不同语言中简单矩阵运算的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
