# solve quadratic

## Python 示例

以下是Python中solve quadratic的示例代码：

```py
# 
import cmath
# 求解二次方程
def solve_quadratic(a,b,c):
    # 计算判别式
    discriminant = b**2 - 4*a*c
    # 计算根
    root1 = (-b + cmath.sqrt(discriminant)) / (2*a)
    root2 = (-b - cmath.sqrt(discriminant)) / (2*a)
    # 返回根
    return root1, root2

def main():
    a =1
    b =2
    c =3
    root1, root2 = solve_quadratic(a,b,c)
    print(f'二次方程 {a}x^2 + {b}x + {c} 的根为 {root1} 和 {root2}')

if __name__ == '__main__':
    main()
```

## 说明

该示例展示了不同语言中solve quadratic的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
