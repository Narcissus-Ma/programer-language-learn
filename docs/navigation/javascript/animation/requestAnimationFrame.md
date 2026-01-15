# 动画实现方式二：requestAnimationFrame -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/requestAnimationFrame.html" height="auto" />

以下是HTML/CSS中动画实现方式二：requestAnimationFrame -->的示例代码：

```html
<!-- title: 动画实现方式二：requestAnimationFrame -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>requestAnimationFrame</title>
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
      // 重写requestAnimationFrame方法，兼容性处理
      window.requestAnimationFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();
      const element = document.getElementById("symbolExg");
      let flag = true;
      let left = 0;
      const render = () => {
        left === 0 ? (flag = true) : left === 100 ? (flag = false) : "";
        flag
          ? (element.style.left = `${left++}px`)
          : (element.style.left = `${left--}px`);
      };
      (function animloop() {
        requestAnimationFrame(animloop);
        render();
      })();
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中动画实现方式二：requestAnimationFrame -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
