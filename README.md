# canvas-sprite-animation

DEMO: [https://takumifukasawa.github.io/canvas-sprite-animation/](https://takumifukasawa.github.io/canvas-sprite-animation/)

## 使い方

```javascript
const canvas = document.getElementById('canvas');

const spriteCanvas = new CanvasSpriteAnimation({
  domElement: canvas    // canvas elem
  src: './sprite.png',  // image src ※必須
  row: 4,               // 横列の画像枚数 ※必須
  col: 6,               // 縦列の画像枚数 ※必須
  maxFrame: 23,         // 合計の画像枚数
  fps: 15,              // fps（default: 30）
  ratio: 2,             // デバイスピクセル比など解像度を設定（default: 1）
  loop: true            // loopするかどうか（default: false）
  init: false           // インスタンスを作る際にロードするかどうか（default: false）
});

spriteCanvas.load()
  .then(() => {
    requestAnimationFrame(tick);
  });

function tick(time) {
  spriteCanvas.update(time);
  spriteCanvas.render();
  requestAnimationFrame(tick);
}
```



