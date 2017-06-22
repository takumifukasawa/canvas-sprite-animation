
import SpriteCanvas from './CanvasSprite';
import TimeAccumulator from './TimeAccumulater';
import TimeSkipper from './TimeSkipper';

const wrapper = document.querySelector('.wrapper');
const spriteCanvas = new SpriteCanvas({
  src: './sprite.png',
  row: 4,
  col: 6,
  maxFrame: 23,
  fps: 15,
  loop: true,
  init: false
});

const timeAccumulator = new TimeAccumulator(update, 60);
const timeSkipper = new TimeSkipper(render, 60);

spriteCanvas.load()
  .then(() => {
    wrapper.appendChild(spriteCanvas.canvas);
    requestAnimationFrame(tick);
  });

function update(time) {
  spriteCanvas.update(time);
}

function render() {
  spriteCanvas.render();
}

function tick(time) {
  timeAccumulator.exec(time);
  timeSkipper.exec(time);
  requestAnimationFrame(tick);
}


