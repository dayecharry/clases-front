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

const agregarNumero = (array, num) => {
  if (num > 50) {
    array.push(num);
  }
};

agregarNumero(listaNumero, 20);
agregarNumero(listaNumero, 60);
agregarNumero(listaNumero, 80);

console.log(listaNumero);
