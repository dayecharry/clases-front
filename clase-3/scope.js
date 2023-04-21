//
function saluda() {
  let nombre = 'luna';
  let apellido = '';
  if (nombre === 'luna') {
    apellido = 'ruiz';
  } else {
    apellido = 'perez';
  }
  return apellido;
}
console.log(saluda());

// tengo un array de superheroes, crear una función permita crear un nuevo array solo con los heroes que tengan un poder mayor a un valor dado
/*
    1.- Crear la función, con un parametro, sera el poder
    2.- Crea el nuevo array
    3.- Usar un bucle para recorrer el array
    4.- Condicional para obtener los heroes con el poder mayor al indicado
    5.- añadir el elemento al nuevo array haciendo uso de push
*/
const superheroes = [
  { name: 'Spiderman', power: 60, ciudad: 'nueva york' },
  { name: 'Hulk', power: 150, ciudad: 'boston' },
  { name: 'Superman', power: 500, ciudad: 'chicago' },
];

const heroes = (poder) => {
  const newArray = [];
  for (let i = 0; i < superheroes.length; i++) {
    if (superheroes[i].power > poder) {
      newArray.push(superheroes[i]);
    }
  }
  return newArray;
};
//console.log(heroes(200));
// crear una función que calcule el promedio de los poderes.
// crear una función que solo me devuelva los superheroes cuyo poder sea mayor que poder promedio

const poderPromedio = () => {
  let total = 0;
  for (const eachHeroe of superheroes) {
    total = total + eachHeroe.power;
  }
  const prom = total / superheroes.length;
  return prom;
};
const newArrayProm = [];

function mayoresPromedio() {
  const prom = poderPromedio();
  for (const eachHeroe of superheroes) {
    if (eachHeroe.power > prom) {
      newArrayProm.push(eachHeroe);
    }
  }
}
mayoresPromedio();
console.log(newArrayProm);
