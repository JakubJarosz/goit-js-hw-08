import Player from '@vimeo/player';

// const _ = require('lodash.throttle');
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
 throt_func(data.seconds)
};
const throt_func = throttle(function (e) {
  window.localStorage.setItem('videoplayer-current-time', JSON.stringify(e));
}, 1000);

player.on('timeupdate', onPlay);

const currentTime = JSON.parse(
  window.localStorage.getItem('videoplayer-current-time')
);

player.setCurrentTime(currentTime);

