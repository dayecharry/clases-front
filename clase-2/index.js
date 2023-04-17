console.log('holisss');
// variables y sus tipos de datos
// tipos datos -> string, números, booleanos, null, undefinded, objetos,  arrays
// Condcionales ->  operadores logicos=  and, or, operadores comparación = >=, <=, >, <, ===, !==, !

console.log('2' === 2);
console.log('2' == 2);

let nombre = 'Luis';
console.log('Bienvenid@ ' + nombre);

const names = ['Angela', 'antonio', 'brenda', 'Federico', 'Maxin', 'Manuel'];

console.log(names[0], names[1], names[2], names[3], names[4], names[5]);

//! Estructuras de control iterativas, permiten repetir un bloque de código n cantidad de veces
//bucle -> for(), for of, forEach, while

// pintar en la consola los números del 1- 110
for (let i = 1; i <= 10; i++) {
  // i++ --> i = i+1
  console.log(i);
}
/*
    i = 1;
    i = i+1 = 2 ->
    i = i+1 = 3 
    ..... 
    i = i +1 = 10 
    i =11
*/
const productos = [
  { nombre: 'refresco', precio: 3, stock: 50 },
  { nombre: 'Chocolate', precio: 5, stock: 150 },
  { nombre: 'Pan', precio: 4, stock: 10 },
];

for (let i = 0; i <= 2; i++) {
  console.log(
    ' producto: ' + productos[i].nombre + ' precio: ' + productos[i].precio
  );
}
const superheroes = [
  {
    name: 'Spiderman',
    power: 60,
    ciudad: 'nueva york',
  },
  {
    name: 'Hulk',
    power: 150,
    ciudad: 'boston',
  },
  {
    name: 'Superman',
    power: 500,
    ciudad: 'chicago',
  },
];
//soy spiderman y mi poder es 60
//soy hulk y mi poder es 150
//soy superman y mi poder es 500
//"el total de todos mis super heroes  es 710"
// ! for ()
let total = 0;
for (let i = 0; i < superheroes.length; i++) {
  total = superheroes[i].power + total; // acumulador
  console.log(
    'Soy ' + superheroes[i].name + ' y mi poder es ' + superheroes[i].power
  );
}
console.log('el total de todos mis super heroes  es ' + total);

// ! for..of
for (const eachElement of superheroes) {
  console.log('La ciudad es ' + eachElement.ciudad);
}

// ! forEach () --> Bucle
superheroes.forEach(function (cadaSuperheroe) {
  console.log(cadaSuperheroe.name, cadaSuperheroe.ciudad);
});
// objetos  compuesto por clave: valor
const mascota = {
  nombre: 'lola',
  edad: 5,
  direccion: 'barcelona',
};
console.log(mascota.nombre, mascota.edad, mascota.direccion);

// ! for.. in --> este bucle recorre las propiedades de un objeto
for (const clave in mascota) {
  //clave= nombre, edad, direccion
  console.log('la propiedad es ' + clave + ' y el valor es ' + mascota[clave]); // otra forma de acceder al valor de una propiedad de un objeto
}
//clave= "nombre", clave = "edad", clave=  "direccion"

// pintar en la consola todas las propiedad de todos los  superHeroe haciendo uso de FOR .. IN,
//y los que tengan power mayor que 100, indicar que es una máquina

// recorro el array de superheroes
for (const heroe of superheroes) {
  console.log('*************************');
  // recorro todas las propiedades del objeto
  for (const key in heroe) {
    console.log(key + ' : ' + heroe[key]);
    // evaluar si el poder es mayor que 100 y la clave es power
    if (key === 'power' && heroe[key] > 100) {
      console.log(' Es una maquina');
    }
  }
}
