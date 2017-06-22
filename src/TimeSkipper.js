
export default class TimeSkipper {
  constructor(func, fps) {
    this._func = func;
    this._rate = 1000 / fps;
    this._time = -Infinity;
  }

  exec(time) {
    // first frame
    if(this._time < 0) {
      this._time = time;
    }

    if(this._time < time) {
      while(this._time < time) {
        this._time += this._rate;
      }
      this._func(this._time, this._rate);
    }
  }
}
