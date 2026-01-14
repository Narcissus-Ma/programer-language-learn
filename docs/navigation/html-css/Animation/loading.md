# animation 实现loading效果 -->

## HTML/CSS 示例

以下是HTML/CSS中animation 实现loading效果 -->的示例代码：

```html
<!-- title: animation 实现loading效果 -->
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>animation 实现loading效果</title>
  <style>
    body {
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      background-color: #222;
    }

    .loading {
      display: flex;
    }

    .dot {
      position: relative;
      width: 2em;
      height: 2em;
      margin: 0.8em;
      border-radius: 50%;
    }

    .dot::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-color: inherit;
      border-radius: inherit;
      /* name对应动画名称 duration动画时长 timing- function动画执行曲线 delay动画开始前的延迟  */
      animation: wave 2s ease-out infinite;
    }

    .dot:nth-child(1) {
      background: #7ef9ff;
    }

    .dot:nth-child(1)::before {
      animation-delay: 0.2s;
    }

    .dot:nth-child(2) {
      background: #89cff0;
    }

    .dot:nth-child(2)::before {
      animation-delay: 0.4s;
    }

    .dot:nth-child(3) {
      background: #4682b4;
    }

    .dot:nth-child(3)::before {
      animation-delay: 0.6s;
    }

    .dot:nth-child(4) {
      background: #0f52ba;
    }

    .dot:nth-child(4)::before {
      animation-delay: 0.8s;
    }

    .dot:nth-child(5) {
      background: #000080;
    }

    .dot:nth-child(5)::before {
      animation-delay: 1.0s;
    }

    @Keyframes wave {

      50%,
      75% {
        transform: scale(2.5);
      }

      80%,
      100% {
        opacity: 0;
      }
    }
  </style>
</head>

<body>
  <div class="loading">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</body>

</html>
```

## 说明

该示例展示了不同语言中animation 实现loading效果 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
