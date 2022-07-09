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
const filter = document.querySelector(".filter");
const filterOptions = document.querySelectorAll('.filter-option__item');

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
    console.log(e);
    const id = Number(e.target.parentElement.value);
    tareas = tareas.filter( el => el.id !== id);
    localStorage.setItem('tareas',JSON.stringify(tareas));

    const nodeTareas = document.querySelectorAll('.card-container');
    nodeTareas.forEach( el =>{
        if(el.children[3].children[0].value == id){
            tasksContainer.removeChild(el);
        };
    });
    Toastify({
        text: "La tarea fue eliminada",
        duration: 1000,
        position: "center", // `left`, `center` or `right`
        style: {background: "linear-gradient(to right, #D50505, #441E0A)",},
        }).showToast();
};
const setTaskState = async (e) => {
    const id = e.target.parentNode.value;
    const result = await tareas.find( tarea => tarea.id == id);//el tiempo de ejecución era tan rápido que a veces result tenía undefined en la línea 51
    result.state = !result.state;
    e.target.parentNode.style.backgroundColor= result.state ? "#10b981" : "#E5E7EB";
    e.target.style.fill = result.state ? "#FFFFFF" : "#9CA3AF";
    localStorage.setItem('tareas',JSON.stringify(tareas))
    if(result.state){
        Toastify({
            text: "La Tarea esta realizada",
            duration: 1000,
            position: "center", // `left`, `center` or `right`
            style: {background: "linear-gradient(to right, #0FBD29, #92B511)",},
            }).showToast(); 
       }else{
        Toastify({
            text: "La Tarea esta Pendiente",
            duration: 1000,
            position: "center", // `left`, `center` or `right`
            style: {background: "linear-gradient(to right, #8B8B90, #9898A0)",},
            }).showToast();
       }
    
}

const printTasks = (newTarea) => {

    const { type, date, id, description, state } = newTarea;

    const newTaskCard = document.createElement('li');
    newTaskCard.classList.add('card-container'); //<li class="card-container"></li>
    newTaskCard.innerHTML = `
        <span class="card__type">${type}</span>
        <span class="card__date">${date}</span>
        <h3>${description}</h3>
        <div class="card__controls">
            <button class="button-delete" value="${id}">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/></svg>
            </button>
            <button class="check-button ${ state ? "check-button--success": "check-button--disabled"}" value="${id}">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="${ state ? "#FFFFFF" :"#9CA3AF" }"><path xmlns="http://www.w3.org/2000/svg" d="M10.6 16.6 17.65 9.55 16.25 8.15 10.6 13.8 7.75 10.95 6.35 12.35ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z"/></svg>
            </button>
        </div>
    `
    newTaskCard.children[3].children[0].addEventListener('click', deleteTaskById);
    newTaskCard.children[3].children[1].addEventListener('click', setTaskState);
    tasksContainer.appendChild(newTaskCard);
    vaciar.style.display = "none";
};

const removeChildrem = (node) => {
    while(node.lastChild){
        node.removeChild(node.lastChild);
    }
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
    if (date.value != "" && type.value != "" && description.value != ""){
        newTarea.id = tareas.length + 1;
        tareas.push({...newTarea}); //spread operator para clonar objetos
        localStorage.setItem('tareas',JSON.stringify(tareas)); //de objeto literal a JSON
        printTasks(newTarea);
        clearFields();
        Toastify({
            text: "La Tarea se agrego correctamente",
            duration: 1000,
            position: "center", // `left`, `center` or `right`
            style: {background: "linear-gradient(to right, #4BC40B, #8AFA55)",},
            }).showToast();
    }else{
        Toastify({
            text: "La Tarea no puede estar vacía",
            duration: 1000,
            position: "center", // `left`, `center` or `right`
            style: {background: "linear-gradient(to right, #D50505, #E78D0C)",},
            }).showToast();
    }
    
});


filter.children[0].addEventListener('click',(e)=>{
    filter.children[1].classList.toggle('active');
})

filterOptions.forEach( option => {
    option.addEventListener('click',(e)=>{
        filter.children[1].classList.toggle('active');
        removeChildrem(tasksContainer);
        let tareasFiltradas;
        switch (e.target.innerHTML) {
            case "resueltas":
                tareasFiltradas = tareas.filter(tarea => tarea.state === true);
                tareasFiltradas.forEach( tarea => {
                    printTasks(tarea)
                });
                break;
            case "pendientes":
                tareasFiltradas = tareas.filter(tarea => tarea.state === false);
                tareasFiltradas.forEach( tarea => {
                    printTasks(tarea)
                });
                break;
            case "ver todas":
                tareas.forEach( tarea => {
                    printTasks(tarea)
                });
                break;
        
            default:
                console.error(`filtro ingresado: ${e.target.innerHTML} no definido`)
                break;
        }
    })
});
//console.error('filtro ingresado no definido')
//Ejecuciones inmediatas
if(localStorage.getItem('tareas')){
    tareas = JSON.parse(localStorage.getItem('tareas')); //de json a objeto literal
    tareas.forEach( tarea => {
        printTasks(tarea)
    });
}