# 边距重叠 -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/marginCollapse.html" height="auto" />

以下是HTML/CSS中边距重叠 -->的示例代码：

```html
<!-- title: 边距重叠 -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>边距重叠</title>
    <style>
      .container {
        background-color: aliceblue;
      }
      .box {
        width: 100px;
        height: 100px;
        border: 5px solid pink;
      }
      .cube:nth-child(2) {
        margin-bottom: 150px;
      }
      .cube:nth-child(3) {
        margin-top: 100px;
      }
      .cube1:nth-child(2) {
        margin-bottom: -50px;
      }
      .cube1:nth-child(3) {
        margin-top: -25px;
      }
      .cube2:nth-child(2) {
        margin-bottom: -50px;
      }
      .cube2:nth-child(3) {
        margin-top: 100px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>一，两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值</h2>
      <div class="box cube"></div>
      <div class="box cube"></div>
    </div>
    <div class="container">
      <h2>
        二，两个相邻的外边距都是负数时，折叠结果是它们两者绝对值之间较大的值
      </h2>
      <div class="box cube1"></div>
      <div class="box cube1"></div>
    </div>
    <div class="container">
      <h2>三，两个相邻的外边距一正一负时，折叠结果是它们两者的相加</h2>
      <div class="box cube2"></div>
      <div class="box cube2"></div>
    </div>
  </body>
</html>

```

## 说明

该示例展示了不同语言中边距重叠 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
