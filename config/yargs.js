const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'base de la tabla de multiplicar'
})
.option('l',{
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'listar en consola los resultados'
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'limite de la tabla'
})
.check( (argv,options) => {
    if( isNaN( argv.b)){
        throw 'La base tiene que ser un numero';
    }
    return true;
})
.argv;

module.exports = argv;