setTimeout(() => {
  console.log('ha pasado 2 segundos');
}, 2000);

function handlerTime() {
  console.log('adios');
}

setTimeout(handlerTime, 5000);
console.log('ready');

const main = document.querySelector('main');
const closeModal = document.querySelector('.close');

setTimeout(() => {
  main.classList.add('visibility');
}, 2000);

closeModal.addEventListener('click', () => {
  main.classList.remove('visibility');
});

setTimeout(() => {
  main.classList.remove('visibility');
}, 6000);

let i = 1;

let id = setInterval(() => {
  console.log(i);
  if (i === 10) {
    clearInterval(id);
  }
  i++;
}, 1000);

console.log('Identificador del intervalo ' + id);
