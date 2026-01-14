# 绘制图片 -->

## HTML/CSS 示例

以下是HTML/CSS中绘制图片 -->的示例代码：

```html
<!-- title: 绘制图片 -->
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

      const img1 = new Image();
      img1.src = "./image/spring.jpeg";

      //   cxt.drawImage(图片, x, y, 宽, 高);
      img1.onload = function () {
        cxt.drawImage(img1, 20, 20, 200, 200);
      };

      //  cxt.drawImage(image, source-x, source-y,source-width,source-height,x,y, width, height);
      let index = 0;
      const img2 = new Image();
      img2.src = "./image/spring.jpeg";
      img2.onload = function () {
        cxt.drawImage(img2, index * 192, 0, 192, 250, 230, 20, 200, 200);
      };

      document.addEventListener("keydown", (e) => {
        // console.log("===e.keycode===", e.keyCode); // 获取输入键盘的键值
        cxt.clearRect(230, 20, 200, 200);
        if (e.keyCode === 13) {
          index++;
          if (index === 4) {
            index = 0;
          }
          cxt.drawImage(img2, index * 192, 0, 192, 250, 230, 20, 200, 200);
        }
      });
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中绘制图片 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
