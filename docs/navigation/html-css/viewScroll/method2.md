# 视差滚动实现方式二 -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/method2.html" height="auto" />

以下是HTML/CSS中视差滚动实现方式二 -->的示例代码：

```html
<!-- title: 视差滚动实现方式二 -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>视差滚动实现方式二</title>
    <style>
      html {
        overflow: hidden;
        height: 100%;
      }
      body {
        /* 3D */
        perspective: 1px;
        transform-style: preserve-3d;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
      }

      #app {
        width: 100vw;
        height: 200vh;
        background: skyblue;
        padding-top: 100px;
      }
      .one {
        width: 500px;
        height: 200px;
        background: #409eff;
        transform: translateZ (0px);
        margin-bottom: 50px;
      }
      .two {
        width: 500px;
        height: 200px;
        background: #67c23a;
        transform: translateZ (-1px);
        margin-bottom: 150px;
      }
      .three {
        width: 500px;
        height: 200px;
        background: #e6a23c;
        transform: translateZ (-2px);
        margin-bottom: 150px;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <div class="one">one</div>
      <div class="two">two</div>
      <div class="three">three</div>
    </div>
  </body>
</html>

```

## 说明

该示例展示了不同语言中视差滚动实现方式二 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
