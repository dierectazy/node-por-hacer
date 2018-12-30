const fs = require('fs');

let listadoPorHacer = [];


const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            console.log("Error al guardar " + err);
        } else {
            console.log("Cambios guardados");
        }
    })
}


const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
            // console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }

}

const listarDB = () => {
    cargarDB();
    return listadoPorHacer;
    //  console.log(listadoPorHacer);
}

const modificarTarea = (descripcion, estado) => {
    cargarDB();
    /* for (let i = 0; i < listadoPorHacer.length; i++) {
         if (listadoPorHacer[i].descripcion === descripcion) {
             listadoPorHacer[i].completado = estado;
             guardarDB();
             return listadoPorHacer[i];
         }
     }*/

    let index = listadoPorHacer.findIndex(tarea => {
        if (tarea.descripcion === descripcion) {
            return tarea;
        }
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = estado;
        guardarDB();
        return "Actualizado"
    } else {
        return "No se encontro"
    }


}

const borrarTarea = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        if (tarea.descripcion === descripcion) {
            return tarea;
        }
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return 'Elemento borrado';
    } else {

        return "No se borro";
    }
}


module.exports = {
    crear,
    listarDB,
    modificarTarea,
    borrarTarea
};