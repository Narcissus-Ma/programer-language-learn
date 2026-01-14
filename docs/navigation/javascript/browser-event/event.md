# 事件监听 -->

## HTML/CSS 示例

以下是HTML/CSS中事件监听 -->的示例代码：

```html
<!-- title: 事件监听 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>事件监听</title>
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
      //   greenBox.addEventListener("click", () => {
      //     console.log("greenBox");
      //   });
      pinkBox.addEventListener("click", (event) => {
        console.log("pinkBox");
      });
      blackBox.addEventListener("click", (event) => {
        console.log("blackBox");
      });
      // 1, 第三个参数的含义 , 默认为false, 表示冒泡阶段触发, 如果是true, 捕获阶段触发
      greenBox.addEventListener(
        "click",
        (event) => {
          console.log("greenBox");
        },
        true
      );
      // 输出结果 greenBox, blackBox, pinkBox
      // 原因: 捕获阶段, 先执行greenBox, 再执行blackBox, 再执行pinkBox
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中事件监听 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
