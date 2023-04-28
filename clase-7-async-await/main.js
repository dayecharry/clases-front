//mostrar todos los personajes de rick and morty en un article
const characterSection = document.querySelector('.characters');
const input = document.querySelector('.search');

const getCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const resp = await response.json();
  //console.log(resp);
  return resp.results;
};
//3º vamos a pintar nuestros characters que ya tenemos mapeados
const renderCharacters = (mappedArray) => {
  //tenemos que vaciar nuestro section para que no contenga lo que tenia antes, sino lo que le estoy enviando ahora
  characterSection.innerHTML = '';
  for (const character of mappedArray) {
    characterSection.innerHTML += `<article id="${character.id}" class="article">
            <img src="${character.image}" alt="" />
            <h4>${character.name}</h4>
            <p>${character.origin}</p>
        </article>
      `;
  }
};

// nos quedamos con las propiedades que nosotros queramos y le damos el nombre que nosotros queremos a la izquierda y el valor a la derecha , lo retornamos para usarlo luego en nuestra función init
const mapCharacter = (arrayOrginal) => {
  return arrayOrginal.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
      origin: character.origin.name,
    };
  });
};
// esta función nos tiene que recibir dos parametros, la lista de personajes y el valor del input
const searchCharacter = (cleanData, value) => {
  const filteredCharacter = cleanData.filter((character) => {
    return character.name.toLowerCase().includes(value.toLowerCase());
  });
  // esta información nos interesa pintarla y nosotros hemos creado una función que recibe un parametro del array que quiere pintar  en este caso sera los personajes filtrados
  renderCharacters(filteredCharacter);
};
const listenerInput = (cleanData) => {
  // primero tengo que coger mi elemento input de mi html que sera de donde recoja el valor, lo he hecho como una variable global
  // le tengo que decir que me escuche un evento, le envio la información por la que yo quiero que filtre y lo el array sobre el que  me va a filtrar que seran nuestro cleanData

  input.addEventListener('input', () => {
    searchCharacter(cleanData, input.value);
  });
};
const init = async () => {
  // primero nos hemos creado esta función que controla el resto de funciones de la aplicación y nos distribuye la información como nosotros queramos para que se vea mas limpio
  // nos guardamos en una variable lo que estamos retornando de nuestra función getCharacter ,el listado de los  personajes
  const characters = await getCharacters();
  //guardo en una variable el array mapeado que devuelve mapCharacter
  // una vez que recibimos nuestro array, nos creamos nuestro función para mapearlos
  // aqui nos creamos otra variable pensando en el retorno de esa función de mapear. Me va a devolver mis characters ya mapeados, por tanto primero para que haga el proceso del map, debo enviarle el array original
  const cleanData = mapCharacter(characters);
  // comprobamos que nos estan llegando nuestros characters mapeados
  // console.log(cleanData);
  // le envio a mi función pintar mis character ya mapeados,  para renderizar los personajes en el HTML
  renderCharacters(cleanData);
  //escuchar evento sobre
  // llamo a mi función que me hara de buscador, y tambien le mando mis character mapeados que son los que luego utilizara junto con el valor del input para hacer el filtro
  listenerInput(cleanData);
};

init();

/*
1.- 
2.-
3.- 
*/
