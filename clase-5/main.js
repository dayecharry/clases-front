// mouse-> click, mouseover, mouseout
// teclado- > keypress
// elementos  y la mayoria de las veces input --> focus, blur, change
// formularios--> submit, reset
// ventana del navegado --> scroll, resize

function funcionClick() {
  console.log('me han clicado');
}
const btn = document.querySelector('.btn');

function handlerClick(ev) {
  console.log(ev);
  console.log('boton pulsado');
}
btn.addEventListener('click', handlerClick);

/******* ejercicio formulario- card preview */

const name = document.querySelector('.name');
const lastname = document.querySelector('.lastname');
const email = document.querySelector('.email');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subTitle');

const handlerName = (ev) => {
  const nameValue = ev.target.value;
  title.innerHTML = nameValue;
};
name.addEventListener('keyup', handlerName);

const handlerLastName = (event) => {
  const lastNameValue = event.target.value;
  title.innerHTML += ' ' + lastNameValue;
};
lastname.addEventListener('change', handlerLastName);

function handlerEmail(e) {
  const emailvalue = e.target.value;
  subtitle.innerHTML = emailvalue;
}
email.addEventListener('input', handlerEmail);

// Ejercicio de peliculas
//crear 3 input de tipo checkbox ->  listado de peliculas
/*
[X] Los juegos del hambre  --> ev.target.checked-> valor booleano
[] Fast and furius
se añada a un array el id del elemento checkeado

1.- Crear el HTML
2.- crear las variable en JS de los inputs, crear un array para los ids marcados
3.- escuchar evento con su función
4.- saber cual es value del checked 
5.- Hacer un IF para saber si está chequeado o no,  y en consecuencia añadirlo al array
*/

const listMovies = document.querySelectorAll('.movie');
const idMovies = [];
const handlerMovie = (ev) => {
  //console.log(ev.target);
  //obtengo el checked del elemento clicado
  const checkedValue = ev.target.checked;
  if (checkedValue) {
    //console.log(idMovies.includes(ev.target.id));
    // include -> retorna true  si el elemento se encuentra dentro del array
    /*** if (!idMovies.includes(ev.target.id)) {
      // añado al array el id del elemento que he hecho click
      idMovies.push(ev.target.id);
    }*/
    idMovies.push(ev.target.id);
  } else {
    // que hacer cuando el ev.target.checked sea false
    // buscar la posicion en el array del elemento desmarcado
    const position = idMovies.indexOf(ev.target.id);
    // extraigo el elemento de la posicion seleccionada
    idMovies.splice(position, 1);
  }
  console.log(idMovies);
};
for (const movie of listMovies) {
  movie.addEventListener('click', handlerMovie);
}
/*** metodos funcionales array ***/
//push, pop, indexOf, findIndex, find, filter, splice, reduce,

// indexOf  solo sirve para arrays simples, (de string o números)
//indexOf, devuelve la posicion de un elemento del array
//splice, eliminar un elemento del array, que se encuentra en una posicion indicada
const frutas = ['banana', 'pera', 'manzana', 'uvas'];
console.log(frutas.indexOf('pera'));
const position = frutas.indexOf('pera');
// elimina un elemento del array, primer parametro la posicion a partir de la cual quiero eliminar, y segundo parametro cuantos necesito eliminar
frutas.splice(position, 1);
console.log(frutas);
