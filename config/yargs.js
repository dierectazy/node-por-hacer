const opts = {
    descripcion: {
        demand: 'true',
        alias: 'd',
        describe: 'Descripcion de la tarea'
    },
    completado: {
        alias: 'c',
        default: true,
        describe: 'Indica si la tarea se completo'
    }
}


const argv = require('yargs')
    .command('crear', 'Comando para crear una tarea', opts)
    .command('actualizar', 'Comando para actualizar una tarea', opts)
    .command('listar', 'Comando para listar una tarea', {
        completado: {
            alias: 'c',
            default: true,
            describe: 'Indica si la tarea se completo'
        }
    })
    .command('borrar', 'Comando para borrar una tarea', opts)
    .help()
    .argv;


module.exports = {
    argv
};