const imgDog = document.querySelector('.dog');

console.log('1');
fetch('https://dog.ceo/api/breed/chow/images/random')
  .then((response) => response.json())
  .then((data) => {
    console.log('2');
    console.log(data);
    imgDog.src = data.message;
  });

console.log('3');

//mostrar todos los personajes de rick and morty en un article
const characterSection = document.querySelector('.characters');
//json --> formato de datos
fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    //nos quedamos con las propiedades que queremos, y podemos darle el nombre que queramos
    const cleanData = data.results.map((character) => {
      return {
        id: character.id,
        name: character.name,
        image: character.image,
        origin: character.origin.name,
      };
    });
    console.log(cleanData);
    for (const character of cleanData) {
      characterSection.innerHTML += `<article id="${character.id}" class="article">
            <img src="${character.image}" alt="" />
            <h4>${character.name}</h4>
            <p>${character.origin}</p>
        </article>
      `;
    }
  });
