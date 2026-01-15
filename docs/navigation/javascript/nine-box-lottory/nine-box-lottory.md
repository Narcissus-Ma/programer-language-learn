# 九宫格抽奖 -->

## HTML/CSS 示例
<HtmlPreview src="/programer-language-learn/demo/nine-box-lottory.html" height="auto" />

以下是HTML/CSS中九宫格抽奖 -->的示例代码：

```html
<!-- title: 九宫格抽奖 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    #fa {
      width: 600px;
      height: 600px;
      border: 1px solid red;
    }

    #fa > div {
      width: 33%;
      height: 33%;
      border: 1px solid red;
      float: left;
      line-height: 200px;
      text-align: center;
      font-size: 40px;
      font-weight: 800;
    }

    #start {
      cursor: pointer;
      background-color: pink;
    }
  </style>
  <body>
    <div id="fa">
      <div class="option">谢谢参与</div>
      <div class="option">四合院</div>
      <div class="option">10000rmb</div>
      <div class="option">ns</div>
      <div id="start">开始抽奖</div>
      <div class="option">ip14</div>
      <div class="option">mac pro</div>
      <div class="option">ps5</div>
      <div class="option">xbox</div>
    </div>
    <script>
      //#region 
      const handleStart = () => {
        const finalIndex = Math.round(Math.random() * (7 - 0) + 0);
        let options = document.getElementsByClassName("option");
        let num = 0;
        let curOption = {
          0: 0,
          1: 1,
          2: 2,
          3: 4,
          4: 7,
          5: 6,
          6: 5,
          7: 3,
        };
        let timer = null;
        let speed = 50; // 速度
        let total = 0; // 递归次数
        const Decelerate = () => {
          if (total < 31 + finalIndex) {
            // 两圈 2*8 + 最后位置下标 -1
            if (num < 7) {
              num++;
            } else {
              num = 0;
            }
            speed += 10; // 改变速度
            // 改变样式
            for (let i = 0; i < options.length; i++) {
              options[i].style.backgroundColor = "";
            }
            options[curOption[num]].style.backgroundColor = "tomato";

            total++;
            timer = setTimeout(Decelerate, speed); // 递归
          } else {
            clearTimeout(timer);
          }
        };
        Decelerate();
      };
      const btn = document.getElementById("start");
      btn.onclick = handleStart;
      //#endregion
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中九宫格抽奖 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
