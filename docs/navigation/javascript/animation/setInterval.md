# 动画实现方式三：setInterval -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/setInterval.html" height="auto" />

以下是HTML/CSS中动画实现方式三：setInterval -->的示例代码：

```html
<!-- title: 动画实现方式三：setInterval -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>定时器思路</title>
    <style>
        #symbolExg {
            width: 50px;
            height: 50px;
            background-color: aqua;
            position: absolute;
        }
    </style>
</head>
<body>
    <div id="symbolExg"></div>
    <script>
        const  element = document.getElementById('symbolExg');
        let flag = true;
        let left = 0;
        setInterval(() => {
            left === 0? (flag=true): left === 100 ? (flag = false) : "";
            flag ? (element.style.left = `${left++}px`) : (element.style.left = `${left--}px`);
        }, 1000 / 60);
    </script>
</body>
</html>
```

## 说明

该示例展示了不同语言中动画实现方式三：setInterval -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
