const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

let seconds = 1;
let minutes = 1;
let hours = 1;

function handlerInterval() {
  second.innerText = seconds <= 9 ? '0' + seconds : seconds;
  seconds = seconds <= 58 ? seconds : 0;

  if (seconds === 0) {
    minute.innerText = minutes <= 9 ? '0' + minutes : minutes;
    minutes = minutes <= 59 ? minutes : 0;
    minutes++;
  }

  if (minute === 0) {
    hour.innerHTML = hours <= 9 ? hours : 0;
    hours = hours <= 23 ? hours : 0;
    hours++;
  }

  seconds++;
}
setInterval(handlerInterval, 1000);
