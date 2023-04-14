console.log('Javascript en la terminal');

// defino una variable con tipo de dato string cadenas de caracteres
let cocina = 'platos';
let bano = 'desmaquillante';

// defino una varible con tipo de dato numerico
let edad = 25;

//constantes-->  su contenido nunca cambia en todo el codigo
const pi = 3.14;
// asigno un nuevo valor a la varibale cocina.
cocina = 'cubiertos';
console.log(pi);
console.log(cocina);

// la diferencia entre LET y CONST, es que let puede cambiar su valor mientras que const NO puede

const nombre = 'Michelle isabel';

// booleanos -> TRUE,  FALSE
let booleano = false;

// null, undefined -> palabras propias de JS NO llevan comillas
let direccion;
console.log(direccion);
let pais = null;
console.log(pais);

//objetos -> estructuras de datos complejas,  compuestas de varias propiedades que contienen clave->valor, y cada valor puede ser de cualquier tipo de dato
let mascota = {
  nombre: 'luna',
  edad: 2,
  hijos: false,
  raza: 'chihuahua',
  direcion: {
    ciudad: 'madrid',
    pais: 'españa',
  },
};
mascota.raza = 'cocker';
console.log(mascota.raza);
let mascota2 = {
  nombre: 'fifi',
  edad: 2,
  hijos: false,
  raza: 'siame',
  direcion: {
    ciudad: 'madrid',
    pais: 'españa',
  },
};
mascota2.propietario = 'Pedro';
console.log(mascota.raza);
console.log(mascota.nombre);
console.log(mascota.direcion.ciudad);

console.log(
  'El nombre de la mascota es ' + mascota.nombre + ' La edad es ' + mascota.edad
);

// array --> lista de elementos
// Cada elemento del array tiene asociado un indice o posicion, comienza el primer indice en 0
let listaNombre = ['angela', 'antonio', 'brenda', 'Danielys'];

console.log(listaNombre[0]);
console.log(listaNombre[3]);
listaNombre[4] = 'manuel';
// sustituimos el valor del indice 1
listaNombre[1] = 'federico';
// push --> metodo que permite añadir un elemento  en el array, al final de este
listaNombre.push('Michelle');
console.log(listaNombre);

const alumnos = [
  { nombre: 'Angela', apellido: 'Garcia' },
  { nombre: 'Antonio', apellido: 'Mata' },
  { nombre: 'Talia', apellido: 'Perez' },
];
alumnos[1].apellido = 'Matas';
console.log(alumnos[2].apellido);
console.log(alumnos);
// crear un array de 3 objetos  productos -->  cada producto -> nombre, precio, stock
// console log  del precio y el nombre del  producto que este en la posicion 1

console.log(
  'El nombre de la mascota es ' + mascota.nombre + ' La edad es ' + mascota.edad
);
