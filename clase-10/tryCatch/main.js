try {
  console.log(person);
} catch (error) {
  console.log(error.message);
}

console.log('fin del ejercicio');

//https://hp-api.onrender.com/api/characters

try {
  fetch('https://hp-api.onrender.com/api/charac')
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
} catch (error) {
  console.log(error.message);
}

console.log('fin del ejercicio');
