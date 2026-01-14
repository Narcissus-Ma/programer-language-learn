# 圆弧 -->

## HTML/CSS 示例

以下是HTML/CSS中圆弧 -->的示例代码：

```html
<!-- title: 圆弧 -->
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

      const midx = cvs.width / 2;
      const midy = cvs.height / 2;

      let angle = 30;

      function drawCircle() {
        cxt.clearRect(0, 0, cvs.width, cvs.height);
        cxt.arc(midx, midy, 100, 0, Math.PI * 2);
        cxt.stroke();

        angle += 1;

        const x1 = midx + 100 * Math.cos((angle * Math.PI) / 180);
        const y1 = midy + 100 * Math.sin((angle * Math.PI) / 180);

        cxt.fillStyle = "red";
        cxt.fillRect(x1, y1, 10, 10);

        window.requestAnimationFrame(drawCircle);
      }
      drawCircle();
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中圆弧 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
