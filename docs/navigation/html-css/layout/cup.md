# 圣杯布局 -->

## HTML/CSS 示例

以下是HTML/CSS中圣杯布局 -->的示例代码：

```html
<!-- title: 圣杯布局 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>圣杯布局</title>
    <style>
      .container {
        margin-left: 120px;
        margin-right: 220px;
      }
      .main {
        float: left;
        width: 100%;
        height: 300px;
        background: green;
      }
      .left {
        position: relative;
        left: -120px;
        float: left;
        height: 300px;
        width: 100px;
        margin-left: -100%;
        background-color: red;
      }
      .right {
        position: relative;
        right: -220px;
        float: right;
        height: 300px;
        width: 200px;
        margin-left: -200px;
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <!-- 三列布局 两边定宽， 中间自适应布局，中间栏优先渲染 -->
    <div class="container">
      <div class="main"></div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </body>
</html>

```

## 说明

该示例展示了不同语言中圣杯布局 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
