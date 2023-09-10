import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player)

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');

function handleTimeUpdate(event) {
  console.log(event);
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player.on('timeupdate', throttle(handleTimeUpdate, 1000));


if (savedTime) {
  player.setCurrentTime(savedTime);
}
