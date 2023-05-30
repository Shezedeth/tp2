const argv = require("process").argv;
const { guardarTarea, filtrarPorEstado } = require("./funcionesDeTareas");
const funcionesDeTareas = require("./funcionesDeTareas");
const tareasParseada = funcionesDeTareas.leerArchivo()
require("colors");



const accion = argv[2];
let respuesta;

switch(accion){
    case "listar":
        funcionesDeTareas.archivoTareas.listar();
        break;
    case "crear":
         let nuevaTarea= {
             titulo: argv[3],
             estado: "pendiente"
            };
            if (nuevaTarea.titulo == undefined){
                console.log("ERROR: tienes que darme una tarea nueva!".red);
                break;
            }

            respuesta = funcionesDeTareas.archivoTareas.guardarTarea(nuevaTarea.titulo, nuevaTarea.estado);

            console.log(respuesta);
             
        break;
    case "filtrar":

        respuesta = funcionesDeTareas.archivoTareas.filtrarPorEstado(argv[3]);
        if(typeof respuesta == "string"){
            console.log(respuesta);
            break;
        }
        
        funcionesDeTareas.archivoTareas.listar(respuesta)
        
        break;
    case undefined :
        console.log("Atención-Tienes que pasar una acción".bgWhite.black);
    break;
    default:
        console.log("No entiendo qué quieres hacer".bgRed);
        break;}






