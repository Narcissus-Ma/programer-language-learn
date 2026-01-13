# 计算一个数的立方和

## Java 示例

以下是Java中计算一个数的立方和的示例代码：

```java
// title: 计算一个数的立方和
public class SumOfSeries {
    public static int sumOfSeries(int n) {
        // 使用数学公式: 1³ + 2³ + ... + n³ = [n(n+1)/2]²
        return (int) Math.pow(n * (n + 1) / 2, 2);
    }
    
    public static void main(String[] args) {
        System.out.println(sumOfSeries(5)); // 输出: 225
    }
}
```

## JavaScript 示例

以下是JavaScript中计算一个数的立方和的示例代码：

```js
// title: 计算一个数的立方和
function sumOfSeries(n) {
    // 使用数学公式: 1³ + 2³ + ... + n³ = [n(n+1)/2]²
    return Math.pow(n * (n + 1) / 2, 2);
}

console.log(sumOfSeries(5)); // 输出: 225
```

## Python 示例

以下是Python中计算一个数的立方和的示例代码：

```py
# title: 计算一个数的立方和
def sum_of_series(n):
    # sum = 0
    # for i in range(1, n+1):
    #     sum += i**3
    # return sum
    return sum(i**3 for i in range(1, n+1))

print(sum_of_series(5))
```

## 说明

该示例展示了不同语言中计算一个数的立方和的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
