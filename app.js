const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');



let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log("Crear");
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log("Listar");
        let listado = porHacer.listarDB();

        for (let tarea of listado) {
            console.log("====== POR HACER ========".green);
            console.log(tarea.descripcion);
            console.log(`Estado : ${tarea.completado}`);
            console.log("=========================".green);
            console.log("");
        }

        break;

    case 'actualizar':

        console.log("Actualizar");
        let tareaActualizada = porHacer.modificarTarea(argv.descripcion, argv.completado);
        console.log(`Actualizado ${tareaActualizada.green}`);
        break;

    case 'borrar':
        console.log("Borrar");
        let respuesta = porHacer.borrarTarea(argv.descripcion);
        console.log(respuesta);

        break;

    default:
        console.log("Comando no reconocido");
        break;
}