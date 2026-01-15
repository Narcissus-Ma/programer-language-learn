# 节流函数 -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/throttle.html" height="auto" />

以下是HTML/CSS中节流函数 -->的示例代码：

```html
<!-- title: 节流函数 -->
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="IE=edge, chrome=1" />
    <title>debounce</title>
    <style>
      #container {
        width: 100%;
        height: 200px;
        line-height: 200px;
        text-align: center;
        color: #fff;
        background-color: #444;
        font-size: 30px;
      }
    </style>
  </head>

  <body>
    <div id="container"></div>
    <script>
      let count = 1;
      let container = document.getElementById("container");

      function getUserAction() {
        container.innerHTML = count++;
      }

      //#region
      /**
       * 思路：
       * 1，时间戳/定时器
       * 2，修复this, 修复 event
       */
      //#endregion

      function throttle(func, wait) {
        let previous = 0;
        return function () {
          const now = +new Date(); //加号 是string转number
          const context = this;
          const args = arguments;
          if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
          }
        };
      }
      // container.onmousemove = getUserAction;
      container.onmousemove = throttle(getUserAction, 1000);
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中节流函数 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
