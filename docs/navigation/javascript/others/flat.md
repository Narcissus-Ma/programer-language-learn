# 数组扁平化

## JavaScript 示例

以下是JavaScript中数组扁平化的示例代码：

```js
// title: 数组扁平化
/**
 * 数组扁平化
 * 思路：总的思路是递归
 * 注：es6、lodash有 flat方法 es6 Array.prototype.flat()/lodash _.flatten 等
 * 用reduce 会比较好
 * 1,判断当前对象是不是数组，是递归
 * 2，与前一个对象拼接
 */

function flat(arr, depth = 1) {
  if (flat > 0) {
    arr.reduce((pre, cur) => {
      const temp = Array.isArray(cur) ? flat(cur, depth - 1) : cur;
      return pre.concat(temp);
    }, []);
  }
  return arr.slice(); // 浅拷贝 无参默认0;
}

```

## 说明

该示例展示了不同语言中数组扁平化的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
