// destructuring e objetos
const devClass = {
  duration: 124,
  content: 'Javascript Vanilla',
  alumns: 24,
  school: 'Upgrade Hub',
  hours: 3.5,
};
/*
function pintar(objeto) {
  const { content, alumns, hours } = objeto;
  console.log(content);
  console.log(alumns);
  console.log(hours);
}
*/
function pintar({ content, alumns, hours }) {
  console.log(content);
  console.log(alumns);
  console.log(hours);
}
pintar(devClass);

//destructuring de arrays

const beers = ['Alhambra', 'Cruzcampo', 'Mahou', 'Estrella'];
const [cerveza1, undefined, cerveza3, cerveza4] = beers;
console.log(beers[0]);
console.log(cerveza4);

const chuches = () => {
  return ['caramelos', 'gomitas', 'frutos secos'];
};

const [chuches1, chuches2, chuches3] = chuches();
console.log(chuches1);
console.log(chuches3);
