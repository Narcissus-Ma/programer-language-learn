# 事件默认行为 -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/preventDefault.html" height="auto" />

以下是HTML/CSS中事件默认行为 -->的示例代码：

```html
<!-- title: 事件默认行为 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>事件默认行为</title>
  </head>
  <body>
    <a
      id="aTag"
      href="https://juejin.cn/post/7232905822279204919?searchId=202310041305466FDCB275D92C80B38AA9#heading-3"
      >点击跳转</a
    >

    <script>
      let aTag = document.getElementById("aTag");

      // 添加事件 preventDefault
      aTag.addEventListener("click", (event) => {
        console.log("aTag");
        event.preventDefault(); // 阻止默认行为
      });
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中事件默认行为 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
