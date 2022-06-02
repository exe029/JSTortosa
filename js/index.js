//declaración de variables
const localStorage = window.localStorage;

const newTarea = {
    id:0,
    date:"",
    type: "",
    description: "",
    state: false,
}
let tareas = [];

//captura de nodos
const date = document.getElementById('date');
const description = document.getElementById('description');
const type = document.getElementById('type');
const addButton = document.getElementById('add-button')
const tasksContainer = document.getElementById('list-tasks');
const vaciar = document.querySelector(".vaciar");


//funciones
const clearFields = () => {
    description.value="";
    date.value = "";
    type.value="";

    newTarea.id = 0;
    newTarea.description="";
    newTarea.date="";
    newTarea.type="";
}

const deleteTaskById = (e) =>{
    console.log(e.target.value);
    const id = Number(e.target.value);
    tareas = tareas.filter( el => el.id !== id);
    localStorage.setItem('tareas',JSON.stringify(tareas));

    const nodeTareas = document.querySelectorAll('.card-container');
    nodeTareas.forEach( el =>{
        console.log(el);
        if(el.children[3].value == id){
            tasksContainer.removeChild(el)
        }
    })

}

const printTasks = (newTarea) => {
    newTaskCard = document.createElement('li');
    newTaskCard.classList.add('card-container'); //<li class="card-container"></li>
    newTaskCard.innerHTML = `
        <span class="card__type">${newTarea.type}</span>
        <span class="card__date">${newTarea.date}</span>
        <h3>${newTarea.description}</h3>
        <button class="button-delete" value="${newTarea.id}"></button>
        <button class="check-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#9CA3AF"><path xmlns="http://www.w3.org/2000/svg" d="M10.6 16.6 17.65 9.55 16.25 8.15 10.6 13.8 7.75 10.95 6.35 12.35ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z"/></svg>
        </button>
    `
    newTaskCard.children[3].addEventListener('click', deleteTaskById);
    console.log(newTaskCard.children[3]);
    

    tasksContainer.appendChild(newTaskCard);
    vaciar.style.display = "none";
}

// menuNav toggle
const btnToggle = document.querySelector('.menu-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('menuNav').classList.toggle('active');
  console.log(document.getElementById('menuNav'))
});

//eventos
date.addEventListener('input', (e)=>{
    console.log(e.target.value);
    newTarea.date = e.target.value;
    console.table(newTarea);
});

description.addEventListener('input', (e)=>{
    console.log(e.target.value);
    newTarea.description = e.target.value;
    console.table(newTarea);
});

type.addEventListener('change', (e)=>{
    console.log(e.target.value);
    newTarea.type = e.target.value;
    console.table(newTarea);
});

addButton.addEventListener('click', (e)=>{
    e.preventDefault();//evita que la pantalla se refresque
    newTarea.id = tareas.length + 1;
    tareas.push({...newTarea}); //spread operator para clonar objetos
    localStorage.setItem('tareas',JSON.stringify(tareas)); //de objeto literal a JSON
    printTasks(newTarea);
    // onmousemove();
    clearFields();
});





//Ejecuciones inmediatas
if(localStorage.getItem('tareas')){
    tareas = JSON.parse(localStorage.getItem('tareas')); //de json a objeto literal
    tareas.forEach( tarea => {
        printTasks(tarea)
    });
    console.log('hay tareas')
}