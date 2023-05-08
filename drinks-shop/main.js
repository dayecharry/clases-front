// Pedir datos a una API, pintar en el HTML el listado de productos haciendo uso de dom avanzado,
// por cada producto  hacer click en un boton + y este se añada a la cesta de la compra, si le das a - elimina de la cesta.  Un vez  en la cesta debe hacer un boton que diga comprar, Al comprar la cesta se vacie y me envie un mensaje con el resumen de lo comprado

/*
x 0.- Crear en el HTML  un div container <div> <ul> </ul> </div>   
                           <section>  </section>
x .- Form en el HTML para obtener la bebida que quiero buscar 
x 1.- hago peticion a la API 
x 2.- Mapear el array que me da la API,idDrink,strDrink,      strAlcoholic, strDrinkThumb
x 3.- Crear variables con los elementos del DOM -> img, h3, p, btn+, btn- (li o article)
x .- hacer un evento sobre el boton de busqueda del form 
4.- crear un array vacio para la cesta
5.- crear  un evento sobre el boton del + -> push  en el array de la cesta
    funcion para pintar los datos de la cesta en el HTML
6.- crear  un evento sobre el boton del - -> splice  en el array de la cesta
    pintar los datos de la cesta en el HTML
7.- crear  un evento sobre el boton  de comprar y este va a eliminar  todos los elementos de la cesta de la compra
    pintar los datos de la cesta en el HTML (0 productos)

*/
let drink = 'mojito';
let allDrinks = [];
let sectionElement = document.querySelector('.list');
const drinkSearch = document.querySelector('.drinkSearch');
const drinkBtnSearch = document.querySelector('.drinkBtnSearch');
const cestaHTML = document.querySelector('.cesta');
const comprar = document.querySelector('.comprar');
let cesta = [];

const handlerSearch = (ev) => {
  ev.preventDefault();
  drink = drinkSearch.value;
  getDataApi(drink);
};

drinkBtnSearch.addEventListener('click', handlerSearch);

const getDataApi = async (nameDrink) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameDrink}`;
  const resp = await fetch(url);
  const respJson = await resp.json();

  // hago una copia en mi variable global
  allDrinks = [...respJson.drinks];
  allDrinks = mapeoArray(allDrinks);
  renderDrinks(allDrinks);
};

const mapeoArray = (array) => {
  return array.map((element) => {
    return {
      id: element.idDrink,
      name: element.strDrink,
      photo: element.strDrinkThumb,
      alcoholic: element.strAlcoholic,
    };
  });
};
const hanlderSuma = (ev) => {
  //renderizar el html
  const idDrink = ev.target.parentNode.id;
  const findDrink = allDrinks.find((e) => idDrink === e.id);
  const findElement = cesta.findIndex((e) => idDrink === e.id);
  if (findElement === -1) {
    findDrink.cantidad = 1;
    cesta.push(findDrink);
  } else {
    cesta[findElement].cantidad += 1;
  }
  renderCesta();
};

const hanlderResta = (ev) => {
  const id = ev.target.parentNode.id;
  const positionELement = cesta.findIndex((e) => e.id === id);
  if (positionELement !== -1) {
    if (cesta[positionELement].cantidad === 1) {
      cesta.splice(positionELement, 1);
    } else {
      cesta[positionELement].cantidad -= 1;
      //cesta[positionELement].cantidad = cesta[positionELement].cantidad - 1;
    }
    renderCesta();
  }
};

function renderCesta() {
  cestaHTML.innerHTML = '';
  for (const element of cesta) {
    cestaHTML.innerHTML += `<li> Bebida: ${element.name}, Cantidad: ${element.cantidad} </li>`;
  }
}
const renderDrinks = (allDrinks) => {
  sectionElement.innerHTML = '';
  for (const drink of allDrinks) {
    const { id, name, photo, alcoholic } = drink;
    sectionElement.innerHTML += `<article id="${id}" class="article">
            <img src="${photo}" alt="" />
            <h3>${name}</h3>
            <p>${alcoholic}</p>
            <button class="suma">+</button>
            <button class="resta">-</button>
        </article>`;
  }

  const allBtnSuma = document.querySelectorAll('.suma');
  for (const suma of allBtnSuma) {
    suma.addEventListener('click', hanlderSuma);
  }
  const allResta = document.querySelectorAll('.resta');
  for (const resta of allResta) {
    resta.addEventListener('click', hanlderResta);
  }
};

const main = async () => {
  //Pedir datos a la API y pintarlo en el HTML
  await getDataApi(drink);
};

main();

function handlerCompra() {
  cestaHTML.innerHTML = '';
  const factura = document.querySelector('.factura');
  for (const element of cesta) {
    factura.innerHTML += `<span> Bebida: ${element.name}, Cantidad: ${element.cantidad}</span>`;
  }
  const cantidadTotal = cesta.reduce((acum, drink) => acum + drink.cantidad, 0);
  factura.innerHTML += `<h3> La cantidad de bebidas comprada es  ${cantidadTotal} </h3>`;
  cesta = [];
}

comprar.addEventListener('click', handlerCompra);
