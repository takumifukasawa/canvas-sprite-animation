
//--------------------------------------------
// 加算方式
//--------------------------------------------

export default class TimeAccumulator {
  constructor(func, fps, chaseCount = 5) {
    this._func = func;
    this._rate = 1000 / fps;
    this._time = -Infinity;
    this._chaseCount = chaseCount;
  }

  exec(time) {
    if(this._time < 0) {
      this._time = time;
    }

    if(this._time >= time) {
      return;
    }

    let count = 0;
    while(count < this._chaseCount && this._time < time) {
      this._time += this._rate;
      this._func(this._time, this._rate);
      count++;
    }
  }
}

