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
        case '5':
            alert('');    
        case 'ESC':
            run=false;
            alert('')
            break;   
      }
}

function mostrarTareas() {
    alert(tareas);
}
  
function crearTarea() {
    let nuevaTarea = prompt('Ingrese tarea a realizar: ');
    tareas.push(nuevaTarea);
}