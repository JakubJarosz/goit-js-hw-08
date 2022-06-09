import Player from '@vimeo/player';
const _ = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function (data) {
     
    window.localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    )
};

player.on("timeupdate", onPlay);



const currentTime = JSON.parse(window.localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(currentTime);


const result = _.add(2, 3);
console.log(result); // 5