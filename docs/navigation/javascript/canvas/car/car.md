# 汽车 -->

## HTML/CSS 示例

以下是HTML/CSS中汽车 -->的示例代码：

```html
<!-- title: 汽车 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas</title>
    <style>
      .canvas {
        border: 1px solid #ddd;
      }
    </style>
  </head>
  <body>
    <canvas width="800" height="800" class="canvas">
      您的浏览器不支持canvas,请升级
    </canvas>
    <script>
      const cvs = document.querySelector(".canvas");
      const cxt = cvs.getContext("2d");

      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;

      const Car = function () {
        this.Robj = {};
        this.x = 0;
        this.rotate = 0;
        this.loadResource(() => {
          console.log("==图片加载完了==");
          this.start();
        });
      };

      // 把json资源转换成 car对象属性
      Car.prototype.loadResource = function (callback) {
        const self = this;
        const xhr = new XMLHttpRequest();
        let imgNum = 0;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            // console.log(xhr.responseText);
            const Rjson = JSON.parse(xhr.responseText);
            Rjson.imgs.forEach((i) => {
              self.Robj[i.name] = {};
              self.Robj[i.name].img = new Image();
              self.Robj[i.name].img.src = i.url;
              self.Robj[i.name].width = self.Robj[i.name].img.width;
              self.Robj[i.name].height = self.Robj[i.name].img.height;

              self.Robj[i.name].img.onload = function () {
                imgNum++;
                if (imgNum === Rjson.imgs.length) {
                  callback();
                }
              };
            });
            // console.log("===self.Robj===", self.Robj);
          }
        };
        xhr.open("get", "./config.json");
        xhr.send(null);
      };

      Car.prototype.start = function () {
        setInterval(() => {
          cxt.clearRect(0, 0, cvs.width, cvs.height);
          this.x++;
          this.rotate++;
          this.drawCar();
          this.drawWheel(this.x, (this.rotate * Math.PI) / 180);
          this.drawWheel(this.x + 110, (this.rotate * Math.PI) / 180);
        }, 50);
        // window.requestAnimationFrame(this.start)
      };

      Car.prototype.drawCar = function () {
        cxt.drawImage(this.Robj.car_body.img, 0 + this.x, 100, 220, 86);
      };

      Car.prototype.drawWheel = function (position, rotate) {
        cxt.save();
        cxt.translate(position + 25 + 25, 175);
        cxt.rotate(rotate);
        cxt.drawImage(this.Robj.car_wheel.img, -25, -25, 50, 50);
        cxt.restore();
      };

      new Car();
    </script>
  </body>
</html>

```

## 说明

该示例展示了不同语言中汽车 -->的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
