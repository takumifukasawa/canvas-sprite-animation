# canvas-sprite-animation

DEMO: [https://takumifukasawa.github.io/canvas-sprite-animation/](https://takumifukasawa.github.io/canvas-sprite-animation/)

## 使い方

```javascript
const canvas = document.querySelector('#canvas');

const spriteCanvas = new CanvasSpriteAnimation({
  domElement: canvas    // canvas elem
  src: './sprite.png',  // image src ※必須
  row: 4,               // 横列の画像枚数 ※必須
  col: 6,               // 縦列の画像枚数 ※必須
  maxFrame: 23,         // 合計の画像枚数
  fps: 15,              // fps
  loop: true            // loopするかどうか
  init: false           // インスタンスを作る際にロードするかどうか
});

spriteCanvas.load()
  .then(() => {
    wrapper.appendChild(spriteCanvas.domElement);
    requestAnimationFrame(tick);
  });

function tick(time) {
  spriteCanvas.update(time);
  spriteCanvas.render();
  requestAnimationFrame(tick);
}
```



