console.log('holisss');

// selectores de css: .class, #id , h1
//document.getElementsByClassName --> selecciona los elementos con una clase dada

//document.getElementsByName --> selecciona los elementos con un name indicado

//querySelector selecciona el primer elemento que tenga el selector indicado
const title = document.querySelector('h1');
console.log(title);

const paragraph = document.querySelector('.paragraph');
console.log(paragraph);

const container = document.querySelector('#container');
console.log(container);

//document.querySelectorAll("selector") --> devuelve un array con todos los elementos que tengan el selector indicado
const container1 = document.getElementById('container');
console.log(container1);

//añadir clases a un elemento del HTML desde el JS
//title es el h1, seleccionado anteriormente
title.classList.add('red');
// paragraph es el P seleccionado anteriormente
paragraph.classList.remove('strong');

/********* crear elementos desde JS a HTML ********/
const food = ['Pizza', 'Hamburguesa', 'Brocoli', 'Ensalada', 'carne', 'tofu'];

const ulList = document.querySelector('.list');

for (const element of food) {
  // crear la etiqueta o el elemento
  const li = document.createElement('li');
  // añado texto al <li>
  li.textContent = element;
  //indico  UL tiene un hijo que llama LI
  ulList.appendChild(li);
}
const superheroes = [
  {
    name: 'Spiderman',
    power: 60,
    ciudad: 'nueva york',
    img: 'https://img2.rtve.es/i/?w=1600&i=1442912677842.jpg',
  },
  {
    name: 'Hulk',
    power: 150,
    ciudad: 'boston',
    img: 'https://e0.pxfuel.com/wallpapers/954/606/desktop-wallpaper-hulk-avengers-3d-animated.jpg',
  },
  {
    name: 'Superman',
    power: 500,
    ciudad: 'chicago',
    img: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/08/03/16595421832009.jpg',
  },
];
//  crear un <article> por cada superhero , <h2> -> nombre del heroe, <p> -> power
const heroes = document.querySelector('.heroes');

for (const eachElement of superheroes) {
  // creo la etiqueta article
  const article = document.createElement('article');
  article.setAttribute('class', 'article-style');
  // indico quien es  el padre del article
  heroes.appendChild(article);

  const img = document.createElement('img');
  // setAttribute (Nombre del atributo de HTML, Valor )
  img.setAttribute('src', eachElement.img);
  img.setAttribute('alt', 'Imagen de un heroe');
  img.classList.add('img-heroes');
  article.appendChild(img);

  const h2 = document.createElement('h2');
  h2.textContent = eachElement.name;
  article.appendChild(h2);

  const p = document.createElement('p');
  article.appendChild(p);
  p.textContent = eachElement.power;
}

const links = document.querySelectorAll('.link');

for (let i = 0; i < links.length; i++) {
  // if (links[i].classList.contains('active') === false)
  if (!links[i].classList.contains('active')) {
    links[i].classList.add('link-menu');
  }
}
console.log(links);
/// llenar los option del select que  esta en el HTML
// value= valor del pais
const country = ['España', 'Francia', 'Italia'];
const hobbies = ['leer', 'nadar', 'crossfit', 'ver tv'];

const form = document.querySelector('.form');
for (const eachElement of hobbies) {
  const input = document.createElement('input');
  //src, href, value
  input.value = eachElement;
  input.setAttribute('type', 'checkbox');
  form.appendChild(input);

  const label = document.createElement('label');
  label.textContent = eachElement;
  form.appendChild(label);
}
