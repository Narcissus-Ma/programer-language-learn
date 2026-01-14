# 视差滚动实现方式一 -->

## HTML/CSS 示例

以下是HTML/CSS中视差滚动实现方式一 -->的示例代码：

```html
<!-- title: 视差滚动实现方式一 -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>视差滚动实现方式一</title>
    <style>
      div {
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        line-height: 100vh;
        text-align: center;
        font-size: 20vh;
      }
      .a-img1 {
        background-image: url(https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg);
        background-attachment: fixed;
        /* background-attachment: scroll; */
        background-size: cover;
        background-position: center center;
      }
      .a-img2 {
        background-image: url(https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg);
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
      }
      .a-img3 {
        background-image: url(https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg);
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
      }
    </style>
  </head>
  <body>
    <div class="a-text">1</div>
    <div class="a-img1">2</div>
    <div class="a-text">3</div>
    <div class="a-img2">4</div>
    <div class="a-text">5</div>
    <div class="a-img3">6</div>
    <div class="a-text">7</div>
  </body>
</html>

```

## 说明

该示例展示了不同语言中视差滚动实现方式一 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
