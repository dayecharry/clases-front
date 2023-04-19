// funciones clasicas
function nombreFuncion() {
  //bloque de instruccion.
  // return --> es opcional,  nos permite extraer o sacar informacion de la funcion
}
//ECm6

//  arrow function  o funciones flechas, son una forma simplificada de definir funciones
const saludar = () => {
  return 'Holisss';
};
console.log(saludar());

// si la funcion flecha solo tiene una linea de codigo, puedo prescindir de las {} y del return
const sayHi = () => 'Hola como estas';
console.log(sayHi());

// crear una función, reciba como parámetro un array y un número, y añada al array el número, siempre que el número sea mayor que 50

let listaNumero = [];
// crear la funcion arrow
const agregarNumero = (array, num) => {
  // se evalua  si el numero cumple con la condicion indicada
  if (num > 50) {
    // se añade un nuevo elemento
    array.push(num); //indexOf, splice, map, filter, find, findIndex,
  }
};
agregarNumero(listaNumero, 20);
agregarNumero(listaNumero, 60);
agregarNumero(listaNumero, 80);
console.log(listaNumero);

// hacer una función reciba como parámetro una edad , y retorne un mensaje si puedes conducir o no,
// < 18 no puede conducir,  >90  no pueden conducir
const conducir = (edad) => {
  /* if (edad < 18 || edad > 90) {
    return 'No puede conducir';
  } else {
    return 'Puede conducir';
  }*/
  // EC6 operador ternario  -->  condicion ? "valor de retorno" :  "otro valor de retorno"
  // el operador ternario se usa muchisimo en React
  const saludo = saludar();
  const mensaje =
    edad < 18 || edad > 90 ? ' no puede conducir' : ' si puede conducir';
  return saludo + mensaje;
};
console.log(conducir(10));

// crear una funcion para calcular la edad  de los perros en años humanos
/*
    1er año del perro -> 5 años humanos
    2do año del perro --> 3 años humanos
    desde el tercer año --> 2 años humanos 
    **********************
    5 --> 5 + 3 + (2 *3 ) =  14 años
*/

const edadHumano = (edadPerro) => {
  let edadHumano = 0;
  if (edadPerro === 1) {
    edadHumano = 5;
  } else if (edadPerro === 2) {
    edadHumano = 8;
  } else {
    // le restamos los primeros dos años de vida porque estos corresponden  a los 8 años ya sumados
    edadHumano = 8 + (edadPerro - 2) * 2;
  }
  return edadHumano;
};
console.log(edadHumano(5));
