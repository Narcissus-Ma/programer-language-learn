# 清除浮动的几种方式 -->

## HTML/CSS 示例

以下是HTML/CSS中清除浮动的几种方式 -->的示例代码：

```html
<!-- title: 清除浮动的几种方式 -->
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>清除浮动的几种方式</title>
  <style>
    .wrapper {
      background: aliceblue;
    }

    .father {
      width: 1000px;
      background-color: pink;
    }

    .father-1 {
      width: 1000px;
      background-color: pink;
      /* 清除浮动 */
      overflow: hidden;
    }

    .son {
      float: left;
      width: 200px;
      height: 200px;
      background-color: purple;
    }

    .son2 {
      float: left;
      width: 200px;
      height: 100px;
      background-color: red;
    }

    .float-clear {
      /* width: 900px; */
      /* height: 300px; */
      /* background-color: blue; */
    }

    .clearfix::after {
      content: "";
      display: block;
      clear: both;
      /* 隐藏这个伪元素 */
      height: 0;
      visibility: hidden;
    }

    .clearfix-1::before,
    .clearfix-1::after {
      content: "";
      display: table;
    }

    .clearfix-1::after {
      clear: both;
    }
  </style>
</head>

<body>
  <!-- 父盒子没有设置高度，导致高度塌陷，清除浮动的目的是为了让浮动元素撑开父盒子 -->
  <div class="wrapper">
    <h1>一， 额外标签法</h1>
    <h2>优点： 方便理解</h2>
    <h2>缺点：添加无意义的标签（float-clear），结构化比较差</h2>
    <div class="father">
      father
      <div class="son">son</div>
      <div class="son2">son2</div>
      <!-- 清除浮动 -->
      <div class="float-clear" style="clear:both">float-clear</div>
    </div>
  </div>
  <div class="wrapper">
    <h1>二， 单伪元素清除浮动</h1>
    <h2>优点：添加伪元素实际上也是添加在父盒子中添加一个子元素，只不过这个子元素作为伪元素存在，不影响布局</h2>
    <h2>缺点：</h2>
    <div class="father clearfix">
      father
      <div class="son">son</div>
      <div class="son2">son2</div>
    </div>
  </div>
  <div class="wrapper">
    <h1>三， 双伪元素清除浮动</h1>
    <h2>优点：</h2>
    <h2>缺点：</h2>
    <div class="father clearfix-1">
      father
      <div class="son">son</div>
      <div class="son2">son2</div>
    </div>
  </div>
  <div class="wrapper">
    <h1>四，给父元素添加overflow</h1>
    <h2>优点：</h2>
    <h2>缺点：无法显示需要溢出的元素</h2>
    <div class="father-1">
      father
      <div class="son">son</div>
      <div class="son2">son2</div>
    </div>
  </div>
  <div class="wrapper">
    <h1>五，直接指定父盒子高度</h1>
    <h2>优点：略</h2>
    <h2>缺点：略</h2>
  </div>

</body>

</html>
```

## 说明

该示例展示了不同语言中清除浮动的几种方式 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
