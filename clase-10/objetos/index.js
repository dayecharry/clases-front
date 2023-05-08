const persona = {
  nombre: 'maria',
  edad: 25,
  casada: true,
  direccion: {
    ciudad: 'madrid',
    cp: 23658,
  },
  estudios: ['bachillerato', 'ingeniera quimica', 'postgrado'],
  dormir: function () {
    return 'Mi nombre es ' + this.nombre + ' y duermo 5 horas';
  },
};
console.log(persona.nombre);
console.log(persona.dormir());

/*
Crea un objeto que sea una cesta de peras y que debe tener varias propiedades:
Número máximo de peras
Número mínimo de peras
Número actual de peras
Número inicial de peras
Y varios métodos que hagan:
Añadir al cesto una pera
Sacar del cesto una pera
Restablecer el número de peras al valor inicial.
Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente.
*/

const propiedad = 'estudios';

console.log(persona[propiedad]);

/*
const array  = [
  {
  nombre:"maria",
  profesion: "diseñadora"
  edad: function (){
    return  29
    }
  }
]


María, 29 años, diseñadora
Lucía, 31 años, ingeniera química
Susana, 34 años, periodista
Rocío, 25 años, actriz
Inmaculada, 21 años, diseñadora

devuelva el promedio de edad de las personas 
*/
