# 线格 -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/line-grid.html" height="auto" />

以下是HTML/CSS中线格 -->的示例代码：

```html
<!-- title: 线格 -->
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

      const gap = 50;
      const horizontalNum = Math.floor(cvs.width / gap);
      const verticalNum = Math.floor(cvs.height / gap);

      for (let i = 1; i < horizontalNum; i++) {
        cxt.strokeStyle = "#ddd";
        cxt.moveTo(i*gap,0)
        cxt.lineTo(i*gap, cvs.height);
        cxt.stroke();
      }

      for (let i = 1; i < verticalNum; i++) {
        cxt.strokeStyle = "#ddd";
        cxt.moveTo(0,i*gap)
        cxt.lineTo(cvs.width, i*gap);
        cxt.stroke();
      }
      
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中线格 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
