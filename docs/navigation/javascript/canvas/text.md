# 文本 -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/text.html" height="auto" />

以下是HTML/CSS中文本 -->的示例代码：

```html
<!-- title: 文本 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas</title>
    <style>
      .canvas {
        border: 1px solid #ddd;
      }
    </style>
  </head>
  <body>
    <canvas width="500" height="500" class="canvas">
      您的浏览器不支持canvas,请升级
    </canvas>
    <script>
      const cvs = document.querySelector(".canvas");
      const cxt = cvs.getContext("2d");

      cxt.font = "48px serif";
      // cxt.fillText(文本, x轴,y轴,最大宽度);
      cxt.fillText("嘿嘿嘿嘿嘿", 50, 50);
      cxt.strokeText("哈哈哈哈哈", 50, 150);
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中文本 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
