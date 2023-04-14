// estructuras de control condicional
// Tomar decisiones --> evaluar si una condicion  se cumple, para ejecutar una seria de acciones o procesos
//siempre en las condiciones vamos a evaluar un valor booleno --> TRUE

// OPERADORES LOGICOS  -> && ,  ||
// OPERADORES COMPARACIÓN  ->  >, <, >= , <= ,  ===,  !==
let edad = 15;

if (edad >= 18) {
  console.log('Puedes conducir');
} else {
  console.log('Debes esperar unos añitos');
}

let ingrediente = 'huevos';

if (ingrediente === 'huevos') {
  console.log('hare una tortilla');
} else {
  console.log('Hare solo cafe');
}
let nombre = 'Angela';

// verifico si el nombre  dado es Dayana para indicar si es una metora o un alumno

// Primera forma de hacerlo
if (nombre !== 'Dayana') {
  console.log('Es un alumn@');
} else {
  console.log(' Es la mentora');
}
// Segunda forma de hacerlo
if (nombre === 'Dayana') {
  console.log('Es una mentora');
} else {
  console.log('Es un alumn@');
}

// debo hacer un descuento por franja de edad
// Personas < 18 -->  descuento 50%
// personas 18 y 30 --> descuento 40%
// personas 31 y 60 --> descuento 25%
// personas > 60 --> descuento de 100%

let age = 20;
if (age < 18) {
  console.log('descuento 50%');
} else if (age >= 18 && age <= 30) {
  console.log('descuento 40%');
} else if (age >= 31 && age <= 60) {
  console.log('descuento 25%');
} else {
  console.log('descuento 100%');
}
