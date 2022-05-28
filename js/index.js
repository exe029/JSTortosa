//declaración de variables
const newTarea = {
    date:"",
    type: "",
    description: "",
    state: false,
}
const tareas = [];

//captura de nodos
const date = document.getElementById('date');
const description = document.getElementById('description');
const type = document.getElementById('type');
const addButton = document.getElementById('add-button')
const tasksContainer = document.getElementById('list-tasks');
const vaciar = document.querySelector(".vaciar");





//funciones
const clearFields = () => {
    date.value = "";
    description.value="";
    type.value="";

    newTarea.description="";
    newTarea.date="";
    newTarea.type="";
}


const printTasks = () => {

    tareas.forEach( tarea =>{
        newTaskCard = document.createElement('li');
        newTaskCard.classList.add('card-container'); //<li class="card-container"></li>
        newTaskCard.innerHTML = `
            <h3>${tarea.description}</h3>
            <span class="card__date">${tarea.date}</span>
            <span class="card__state">${tarea.state}</span>
            <span class="card__type">${tarea.type}</span>
            <button class="button-delete">X</button>
        `;

        tasksContainer.appendChild(newTaskCard);
        vaciar.style.display = "none";
        

    });

}

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
    tareas.push(newTarea);
    printTasks();
    clearFields();
    onmousemove();
    
    

});








/*tipos de eventos

 - click ( cuando se hacer clic sobre ese elemento )
 - input ( cuando hay un cambio en un input )
 - keydown ( cuando alguien presiona una teclado )

*/


