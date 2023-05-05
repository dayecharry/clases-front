//funcion sea un generador de casas
// funcion  un generar de aseos

function generadorCasas(numHab) {
  //console.log('esta casa va a tener ' + numHab);
  console.log(`esta casa va a tener ${numHab}`);

  function generadorAseos(numAseos) {
    console.log(`Esta casa tendra ${numAseos}`);
    return {
      habitaciones: numHab,
      aseos: numAseos,
    };
  }
  return generadorAseos;
}

const casa7hab8aseos = generadorCasas(7)(8);
console.log(casa7hab8aseos);

const { habitaciones, aseos } = casa7hab8aseos;
console.log(habitaciones, aseos);

const casa2Hab = generadorCasas(2);
console.log(casa2Hab(2));

// Pedir datos a una API, pintar en el HTML el listado de productos haciendo uso de dom avanzado,
// por cada producto  hacer click en un boton + y este se añada a la cesta de la compra, si le das a - elimina de la cesta.  Un vez  en la cesta debe hacer un boton que diga comprar, Al comprar la cesta se vacie y me envie un mensaje con el resumen de lo comprado
