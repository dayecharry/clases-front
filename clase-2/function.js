// ! funciones

/*
function NOMBRE_FUNCION (){ // entre los parentesis puede recibir parámetros 

    contenido de la función, sera un conjunto de instrucciones
    operaciones con array, operaciones aritmeticas, condicionales
    crear variables, crear, objetos, 
    llamar a otras funciones
} 
*/
//creamos una funcion, debe tener

function saludar(nombre) {
  console.log('Bienvenid@ ' + nombre);
}
saludar('Anacleta');
saludar('Luis');

// hacer una funcion que reciba como parámetro una edad y pinte un mensaje  indicando si puede conducir  o no
function puedoConducir(edad) {
  if (edad >= 18) {
    console.log('puede conducir');
  } else {
    console.log('Debes esperar cumplir 18 años');
  }
}
puedoConducir(15);
puedoConducir(25);
puedoConducir(80);

function suma(num1, num2) {
  let total = num1 + num2;
  return total;
}
console.log(suma(10, 20));

//hacer una función, que calcule el iva de un precio dado, y retorne el precio con iva, y el precio sin iva
