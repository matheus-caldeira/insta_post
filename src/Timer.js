import Emitter from './Emitter.js'
import View from './View.js'

import timeToMinutes from './utils/timeToMinutes.js'
import timeToSeconds from './utils/timeToSeconds.js'
import formatTime from './utils/formatTime.js'

const Timer = {
  time: 60 * 60,
  currentTime: 0,
  interval: null,

  init: (time) => {
    Timer.time = typeof time === 'number' ? time : Timer.time;
    Timer.currentTime = Timer.time;
    Timer.interval = setInterval(Timer.update, 1000);
  },

  update: () => {
    Timer.currentTime--;

    View.render({
      minutes: formatTime(timeToMinutes(Timer.currentTime)),
      seconds: formatTime(timeToSeconds(Timer.currentTime)),
    })

    if(Timer.currentTime === 0) {
      Emitter.emit('new-post')
      Emitter.emit('start')
      clearInterval(Timer.interval);
    }
  }
};

export default Timer;