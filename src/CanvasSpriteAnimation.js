
export default class CanvasSpriteAnimation {
  constructor({ domElement, src, maxFrame, row, col, fps, loop, init }) {
    this.domElement = domElement || document.createElement('canvas');
    this._ctx = this.domElement.getContext('2d');

    this._src = src;
    this._row = row;
    this._col = col;
    this._minFrame = 0;
    this._maxFrame = maxFrame || this._row * this._col;
    this._fps = fps || 30;
    this._loop = loop || false;
    this._init = init || false;

    this._canRender = false;

    this._width = 0;
    this._height = 0;

    this._frameIndex = 0;
    this._startAt = 0;

    if(this._init) {
      this._load();
    }
  }

  load() {
    return new Promise(resolve => {
      this._image = new Image();
      this._image.onload = () => {
        this._width = this._image.width / this._row;
        this._height = this._image.height / this._col;
        
        this.domElement.width = this._width;
        this.domElement.height = this._height;
    
        this._frameWidth = this._width;
        this._frameHeight = this._height;

        this._canRender = true;
        this._startAt = performance.now();

        resolve();
      }
      this._image.src = this._src;
    });
  }

  reset() {
    this._frameIndex = this._minFrame;
  }

  update(time) {
    const rawFrame = (time - this._startAt) / (1000 / this._fps) | 0;
    this._frameIndex = 
      this._loop ? rawFrame % this._maxFrame
        : rawFrame < 0 ? 0
        : rawFrame <= this._maxFrame - 1 ? rawFrame
        : this._maxFrame - 1;

    // when check index values
    // console.log(time, rawFrame, this._frameIndex)
  }

  render() {
    if(!this._canRender) return;
    
    this._ctx.clearRect(0, 0, this._width, this._height);

    const rowIndex = this._frameIndex % this._row;
    const colIndex = (this._frameIndex / this._row) | 0;

    this._ctx.drawImage(
      this._image,
      this._frameWidth * rowIndex, this._frameHeight * colIndex,
      this._width, this._height,
      0, 0,
      this._width, this._height
    );
  }
}
