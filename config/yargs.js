const argv = require('yargs')
    .command('crear', 'Crear tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualizar tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tares'
        }
    })
    .command('borrar', 'Borrar la tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Eliminar la Tarea'
        }
    })
    .argv;


module.exports = {
    argv
}