
import CanvasSpriteAnimation from './CanvasSpriteAnimation';

const canvas = document.getElementById('canvas');

const spriteCanvas = new CanvasSpriteAnimation({
  domElement: canvas,
  src: './sprite.png',
  row: 4,
  col: 6,
  maxFrame: 23,
  fps: 15,
  loop: true
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


