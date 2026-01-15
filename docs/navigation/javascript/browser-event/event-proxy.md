# 事件代理 -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/event-proxy.html" height="auto" />

以下是HTML/CSS中事件代理 -->的示例代码：

```html
<!-- title: 事件代理 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>事件代理</title>
  </head>
  <style>
    li {
      width: 100px;
      background: #efe5ad;
      font-size: 20px;
      margin: 10px;
    }
  </style>

  <body>
    <h1>不使用事件代理</h1>
    <ul id="ul">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>

    <h1>使用事件代理</h1>
    <ul id="ul2">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>

    <script>
      // 不使用事件代理
      let li = document.getElementsByTagName("li");
      for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", () => {
          console.log(li[i].innerHTML);
        });
      }

      // 使用事件代理
      let ul = document.getElementById("ul2");
      ul.addEventListener("click", (e) => {
        console.log(e.target.innerHTML, "1111");
      });
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中事件代理 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
