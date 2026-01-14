# 放大镜 -->

## HTML/CSS 示例

以下是HTML/CSS中放大镜 -->的示例代码：

```html
<!-- title: 放大镜 -->
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

      cvs.width = window.innerWidth - 200;
      cvs.height = window.innerHeight - 200;

      const img = new Image();
      img.src = "./image/magnifier.png";

      img.onload = function () {
        cxt.drawImage(img, 0, 0);
      };

      function handleMousemove(e) {
        cxt.clearRect(0, 0, cvs.width, cvs.height);
        cxt.drawImage(img, 0, 0);
        const moveX = e.clientX - cvs.offsetLeft;
        const moveY = e.clientY - cvs.offsetTop;
        cxt.drawImage(
          img,
          moveX - 40,
          moveY - 40,
          80,
          80,
          moveX - 80,
          moveY - 80,
          160,
          160
        );
      }

      cvs.addEventListener("mousedown", function (e) {
        const X = e.clientX - cvs.offsetLeft;
        const Y = e.clientY - cvs.offsetTop;
        // console.log("===X,Y===", X, Y);
        cxt.beginPath();
        cxt.moveTo(X, Y);

        document.addEventListener("mousemove", handleMousemove);
      });

      cvs.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", handleMousemove);
        cxt.drawImage(img, 0, 0);
      });
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中放大镜 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
