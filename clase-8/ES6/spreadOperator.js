console.log('ready');

const alumnos = ['Brenda', 'danielys', 'federico', 'maxin', 'talita', 'manuel'];

alumnos.push('raquel');
//console.log(alumnos);

const newArray = alumnos;
newArray.push('michelle');
//console.log(alumnos);

// spread operator  JS
const newArray2 = [...alumnos, 'Talia'];
//newArray2.push('Talia');
console.log(alumnos);
console.log(newArray2);

const basicHouse = {
  bedrooms: 3,
  garden: true,
};

basicHouse.kitchen = 1;
console.log(basicHouse);

const myHouse = {
  ...basicHouse,
  dog: false,
};

basicHouse.windows = false;
console.log(myHouse);
console.log(basicHouse);
