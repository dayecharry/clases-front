const tasks = [
  { id: '001', name: 'Viaje en yate por el mediterráneo', completed: false },
  { id: '002', name: 'Ganarme la lotería', completed: false },
  { id: '003', name: 'Saltar en paracaídas', completed: false },
  { id: '004', name: 'Practicar JavaScript', completed: true },
  { id: '005', name: 'Practicar MONGO', completed: true },
  { id: '006', name: 'Ver un peli', completed: false },
];

/*
  pintar el listado tareas en el HTML,
  cada tarea debe tener checkbox,  y al marcarlo debo poner un estilo y tachar la tarea,
  
  Tareas
  X 1.- Definir una const con ul que esta en el HTML, querySelector.
  X crear una funcion para renderizar los <li>
  X 2.- Recorrer el array
  X 3.- Crear un li por cada tarea--> createElement, indico quien es su padre <ul>
  X 4.- crear un <input checkbox> , y su padre será el <li>
  X 5.- crear un <label> con el nombre de la tarea, y su padre será el <li>
  X 6.- Crear la clase de css con el estilo de tachado
  X 7.- Escuchar evento sobre los  input addEventListener("click")
  X 8.- condicional para  cambiar el valor de la propiedad completed de true a false o viseversa
  X 9.- volver a renderizar el array de la lista de tareas,  llamar a la funcion que renderiza
*/

const ultasks = document.querySelector('.list');

// funcion que permite pintar en el HTML el listado de elementos del array
function renderTasks() {
  ultasks.innerHTML = '';

  for (const task of tasks) {
    //creo el li hijo del ul
    const li = document.createElement('li');
    ultasks.appendChild(li);

    //creo el input con todos los atributos que necesites
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', task.id);
    input.classList.add('itemTask');
    li.appendChild(input);

    const label = document.createElement('label');
    label.textContent = task.name;
    li.appendChild(label);

    // en cado que la propiedad completed de una tarea sea true, se añade una clase de css al li, y al input checked tru
    if (task.completed) {
      li.classList.add('completed');
      input.checked = true;
    }
  }
  // escuchamos a los input checkbox, se debe  llamar  a la funcion aqui y no fuera, porque sino le indicará que no esta definido
  listenerInput();
}

//las funciones manejadoras de eventos no tienen return
function handlerCheckbox(ev) {
  //console.log(ev.target.id);
  const position = tasks.findIndex((task) => task.id === ev.target.id);
  //console.log(position);
  //console.log(tasks[position].completed);
  tasks[position].completed = ev.target.checked;
  //tasks[position].completed = !tasks[position].completed;
  renderTasks();
}
// funcion que selecciona todos checkbox y asigna un addEventListener para poder saber cuando ha ocurrido un click y actuar en consecuencia
function listenerInput() {
  const allCheckbox = document.querySelectorAll('.itemTask');
  allCheckbox.forEach((checkbox) => {
    checkbox.addEventListener('click', handlerCheckbox);
  });
}
renderTasks();

// para añadir una nueva tarea, selecciono todo los input para luego coger su value
const id = document.querySelector('.id');
const name = document.querySelector('.name');
const completed = document.querySelector('.completed');
const btn = document.querySelector('.btn');

function handleClick(ev) {
  // esto me permite evitan el envio por defecto  del formulario al hacer click sobre el boton
  ev.preventDefault();
  // creo una nueva tarea con la misma estructura original, y con los values de los inputs
  const newTask = {
    id: id.value,
    name: name.value,
    completed: completed.checked,
  };
  // añade la nueva tarea al array
  tasks.push(newTask);
  console.log(tasks);
  // volvemos a llamar  a la funcion para que  renderice el nuevo listado de tareas modificado
  renderTasks();
}

// cuando ocurra un click sobre el boton ejecuto la funcion handleClick
btn.addEventListener('click', handleClick);
