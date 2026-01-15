# stopImmediatePropagation -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/stopImmediatePropagation.html" height="auto" />

以下是HTML/CSS中stopImmediatePropagation -->的示例代码：

```html
<!-- title: stopImmediatePropagation -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>stopImmediatePropagation</title>
    <style>
      #greenBox {
        width: 200px;
        height: 200px;
        background: #c2f5ca;
      }
      #pinkBox {
        width: 100px;
        height: 100px;
        background-color: #f7d0d0;
        color: #fff;
        position: absolute;
      }
      #blackBox {
        width: 50px;
        height: 50px;
        background: #000;
      }
    </style>
  </head>
  <body>
    <div id="greenBox">
      <div id="pinkBox">
        <div id="blackBox"></div>
      </div>
    </div>

    <script>
      let greenBox = document.getElementById("greenBox");
      let pinkBox = document.getElementById("pinkBox");
      let blackBox = document.getElementById("blackBox");

      // 添加事件
      greenBox.addEventListener("click", () => {
        console.log("greenBox");
      });
      pinkBox.addEventListener("click", (event) => {
        console.log("pinkBox");
      });
      // stopImmediatePropagation() 与 stopPropagation()
      blackBox.addEventListener("click", (event) => {
        console.log("blackBox");
        // event.stopPropagation();
        event.stopImmediatePropagation();
      });
      blackBox.addEventListener("click", (event) => {
        console.log("blackBox-1111");
      });
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中stopImmediatePropagation -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
