//map, filter, find, findIndex, reduce
// indexOf, splice, push, pop
const personajes = [
  { name: 'batman', tipo: 'heroe', power: 40, defense: 130 },
  { name: 'spiderman', tipo: 'heroe', power: 60, defense: 230 },
  { name: 'joker', tipo: 'VILLANO', power: 100, defense: 30 },
  { name: 'superman', tipo: 'heroe', power: 150, defense: 70 },
  { name: 'duende verde', tipo: 'VIllano', power: 90, defense: 110 },
  { name: 'Dr. Octopus', tipo: 'villano', power: 220, defense: 150 },
];
//map --> recorre un array,
const arrayNuevo = [];
for (const unElemento of personajes) {
  arrayNuevo.push({ name: unElemento.name, type: unElemento.tipo });
}
console.log(arrayNuevo);
const newArray = personajes.map((unElemento) => {
  return { name: unElemento.name, type: unElemento.tipo };
});
console.log(newArray);

// filter--> filtra los elementos  que cumplan con una condicion
const villanos = personajes
  .filter((cadaElemento) => {
    return cadaElemento.tipo.toLowerCase() === 'villano';
  })
  .map((cadaElemento) => {
    return cadaElemento.name;
  });
console.log(villanos);

// find --> Devuelve el primer elemento del array que cumple una condicion indicada
// si no encuentra ningun elemento que cumple la condicion devuelve undefined
const findDefense = personajes.find((personaje) => {
  return personaje.defense < 100;
});
console.log(findDefense);
const findHeroe = personajes.find((personaje) => {
  return personaje.tipo === 'heroe' && personaje.power > 100;
});
console.log(findHeroe);
// findIndex--> retorna la posicion d eun elemento dentro del array
// sino lo encuentra devuelve -1
const positionSpiderman = personajes.findIndex((element) => {
  return element.name === 'spiderman';
});
console.log(positionSpiderman);

//reduce
const totalPower = personajes.reduce(
  (acumulado, unPersonaje) => acumulado + unPersonaje.power,
  0
);
console.log(totalPower);

let acumPower = 0;
for (const personaje of personajes) {
  acumPower += personaje.power;
}
console.log(acumPower);

// total de defensa que tengo  en los heroes
