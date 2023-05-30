const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const leerArchivo = () => JSON.parse(readFileSync(path.join(__dirname, 'tareas.json'), 'utf8'))


const escribirJSON = (tareas) => writeFileSync(path.join(__dirname, 'tareas.json'), JSON.stringify(tareas, null, 3), "utf-8");

// Funcion Constructora -----------------
function Tarea(titulo, estado) {
    this.titulo = titulo;
    this.estado = estado;
};
//---------------------------------------

const archivoTareas = {// este objeto contiene las funciones que utiliza la app --------

    tareas: leerArchivo(),//esto lee el json y lo parsea para poder usarlo

    listar : function (tareas = this.tareas){

        console.log(
            `༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺⊱ ────── {Lista de tareas} ───── ⊰༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺
      `.rainbow);
        tareas.forEach((tarea, i) => {
            console.log(` ${i + 1} `.yellow + `${tarea.titulo}`.magenta + ` - `.red + `${tarea.estado}
            `.blue);
        });
        console.log(`༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺⊱ ────── {.⋅ ♫ ♫ ♫ ♫ ♫  ⋅.} ───── ⊰༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺༻✦༺༻✦༺༻✧༺`.rainbow
        );

        return null;
    },


    guardarTarea : function (titulo, estado) {
        let tareas = this.tareas;

        let nuevaTarea = new Tarea(titulo, estado);

        tareas.push(nuevaTarea);

        escribirJSON(tareas);

        return `La tarea "${nuevaTarea.titulo}" se agrego satisfactoriamente`.green

    },
    filtrarPorEstado : function(estado){
        const tareasFiltradas = this.tareas.filter(tarea => tarea.estado === estado);     
            if (estado == undefined){
                return "No me diste nada para buscar".bgBlue
            }
            return tareasFiltradas;
    }

}

module.exports = {
    leerArchivo,
    escribirJSON,
    archivoTareas,
}
