const menu =
  'Ingrese el número correspondiente a la acción que desea ejecutar: \n1.-Ingresar mi nombre \n2.-Ingresar mi apellido \n3.-Ingrese tarea a realizar \n4.-Cosultar todas las tareas\n5.-Ver tareas pendientes\n6.-Ver tareas realizadas \n"ESC" Salir del programa';

let nombre = "";
let apellido = "";
const tareas = [
  {
    date: "23/05/2022",
    type: "hogar",
    description: "lavar el auto",
    state: false,
  },
  {
    date: "26/05/2022",
    type: "hogar",
    description: "reparar la puerta",
    state: false,
  },
  {
    date: "25/05/2022",
    type: "hogar",
    description: "preparar locro",
    state: false,
  },
  {
    date: "30/05/2022",
    type: "oficina",
    description: "controlar presión de válvulas",
    state: false,
  },
  {
    date: "02/05/2022",
    type: "hogar",
    description: "bañar al perro",
    state: true,
  },
  {
    date: "05/06/2022",
    type: "oficina",
    description: "pedir vacaciones",
    state: false,
  },
];

let tareasPendientes = [];
let tareasRealizadas = [];

let run = true;
while (run) {
  let option = prompt(menu);
  switch (option) {
    case "1":
      nombre = prompt("Ingresa tu nombre: ");
      break;
    case "2":
      apellido = prompt("Ingresa tu apellido: ");
      break;
    case "3":
      crearTarea();
      break;
    case "4":
      mostrarTareas(tareas,'generales');
      break;
    case "5":
      getTareasPendientes();
      mostrarTareas(tareasPendientes,'pendientes');
      alert(`Porcentaje de tareas pendientes: ${getPorcentaje(tareas.length, tareasPendientes.length).toFixed(2)}%`);
      break;
    case "6":
      getTareasRealizadas();
      mostrarTareas(tareasRealizadas,'realizadas');
      alert(`Porcentaje de tareas realizadas: ${getPorcentaje(tareas.length, tareasRealizadas.length).toFixed(2)}%`);
      break;
    case "ESC":
      run = false;
      break;
  }
}

function mostrarTareas(colection,category) {
  if (colection.length > 0) {
    let stringTasks = "";
    colection.forEach((tarea, index) => {
      stringTasks =
        stringTasks +
        "\n" +
        index +
        "-" +
        tarea.description +
        "\n" +
        tarea.date;
    });
    alert(stringTasks);
  } else {
    alert(`No hay tareas ${category} por el momento`);
  }
}

function crearTarea() {
  const newTask = {
    date: "",
    type: "",
    description: "",
    state: false,
  };

  newTask.description = prompt("Ingrese tarea a realizar: ");
  newTask.date = prompt("Ingrese la fecha máxima de resolución: (dd/mm/yyyy)");
  let type = prompt("Ingrese el tipo de tarea: \n1.-Hogar\n2.-Oficina");
  if (type == "1") {
    newTask.type = "hogar";
  } else if (type == "2") {
    newTask.type = "oficina";
  } else {
    while (type != "1" && type != "2") {
      type = prompt(
        "Ingrese el tipo correcto de tarea: \n1.-Hogar\n2.-Oficina"
      );
    }
    if (type == "1") {
      newTask.type = "hogar";
    } else {
      newTask.type = "oficina";
    }
  }

  tareas.push(newTask);
}

function getTareasPendientes() {
  tareasPendientes = tareas.filter((tarea) => tarea.state === false);
}

function getTareasRealizadas() {
  tareasRealizadas = tareas.filter((tarea) => tarea.state === true);
}

function getPorcentaje(total, part) {
  return (part * 100) / total;
}

<span class="card__state">${newTarea.state}</span>