const menu = 'Ingrese el número correspondiente a la acción que desea ejecutar: \n1.-Ingresar mi nombre \n2.-Ingresar mi apellido \n3.-Ingrese tarea a realizar \n4.-Cosultar tarea \n"ESC" Salir del programa';
 
let nombre = '';
let apellido = '';
const tareas = [];

let run = true;
while (run){    
    let option = prompt(menu);
    switch(option) {
        case '1':
            nombre = prompt('Ingresa tu nombre: ') ;
            break;
        case '2':
            apellido = prompt('Ingresa tu apellido: ') ;
            break;
        case '3':
            crearTarea();
            break;
        case '4':
            mostrarTareas();    
        case 'ESC':
            run=false;
            alert('')
            break;   
      }
}

function mostrarTareas() {
    let stringTasks = '';
    tareas.forEach( (tarea, index) => {
    stringTasks = stringTasks + '\n' + index + '-' + tarea.description + '\n'+ tarea.date;
    });
    alert(stringTasks);
}
  
function crearTarea() {
    const newTask = {
        date:'',
        type:'',
        description:'',
        state:false,
    }

    newTask.description = prompt('Ingrese tarea a realizar: ');
    newTask.date = prompt('Ingrese la fecha máxima de resolución: (dd/mm/yyyy)');
    newTask.type = prompt('Ingrese si la tarea es tipo "hogar" u "oficina"');
    
    tareas.push(newTask);
}