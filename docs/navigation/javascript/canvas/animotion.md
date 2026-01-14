# 动画 -->

## HTML/CSS 示例

以下是HTML/CSS中动画 -->的示例代码：

```html
<!-- title: 动画 -->
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

      // clearRect(x轴，y轴，宽，高) 清空画布中的方形区域
      // 定时器
      // let x = 20;
      // function drawRect() {
      //   setInterval(() => {
      //     cxt.clearRect(0, 0, cvs.clientWidth, cvs.clientHeight);
      // if (x < 500) {
      //   x++;
      // } else {
      //   x = 20;
      // }
      // cxt.fillRect(x, x, 100, 100);
      //   }, 20);
      // }
      // drawRect();

      // 动画关键帧
      let x = 20;
      function drawRect() {
        cxt.clearRect(0, 0, cvs.clientWidth, cvs.clientHeight);
        if (x < 500) {
          x++;
        } else {
          x = 20;
        }
        cxt.fillRect(x, x, 100, 100);
        window.requestAnimationFrame(drawRect);
      }
      drawRect();
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中动画 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
