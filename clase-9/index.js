//clousures
const gobal = 'Mojito';
/*function externa() {
  console.log('Esta es la funcion externa');
  function interna() {
    console.log('esta es la funcion interna');
    const msj = 'Esta variable esta dentro de la funcion interna';
    return msj;
  }
  return interna;
}
const msj = externa()();
console.log(msj);
*/
function interna() {
  console.log('esta es la funcion interna');
  const msj = 'Esta variable esta dentro de la funcion interna';
  return msj;
}
function externa() {
  console.log('Esta es la funcion externa');
  const msjInterna = interna();
  return msjInterna;
}
const msj = externa();
console.log(msj);
