# debounce -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/debounce.html" height="auto" />

以下是HTML/CSS中debounce -->的示例代码：

```html
<!-- title: debounce -->
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

      function getUserAction(e) {
        console.log("==event==", e);
        container.innerHTML = count++;
      }

      // #region
      /**思路
       * 1，下次触发之前，清除之前没触发的任务
       * 2，只有不再触发之后，才执行
       * 3, 修改this执向
       * 4, 修复event对象
       * 5, 首次触发
       */
      // #endregion
      function debounce(func, wait, immediate) {
        let timeout, result;
        return function () {
          const context = this;
          const args = arguments;
          if (timeout) {
            clearTimeout(timeout);
          }
          if (immediate) {
            let callNow = !timeout;
            timeout = setTimeout(function () {
              timeout = null; // 递归前面要清楚定时器，定时器还是要写的
            }, wait);
            if (callNow) {
              // 没有执行过就执行
              result = func.apply(context, args);
            }
          } else {
            timeout = setTimeout(function () {
              result = func.apply(context, args);
            }, wait);
          }
          return result;
        };
      }

      // container.onmousemove = getUserAction;
      container.onmousemove = debounce(getUserAction, 500, true);
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中debounce -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
