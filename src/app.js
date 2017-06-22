
import CanvasSpriteAnimation from './CanvasSpriteAnimation';

const canvas = document.getElementById('canvas');

const spriteCanvas = new CanvasSpriteAnimation({
  domElement: canvas,
  src: './sprite.png',
  row: 4,
  col: 6,
  maxFrame: 23,
  fps: 15,
  ratio: 2,
  loop: true,
  init: false
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


