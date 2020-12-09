const last = {
    alias: 'l'
}

const argv = require('yargs')
    .command('sumar', 'Realiza la suma de los siguientes parametros', { last })
    .command('restar', 'Realiza la resta de los siguientes parametros', { last })
    .command('multiplicar', 'Realiza la multiplicación de los siguientes parametros', { last })
    .command('dividir', 'Realiza la división de los siguientes parametros', { last })
    .command('elevar', 'Realiza una potencia con los dos siguientes parametros', { last })
    .command('saved', 'Retorna el ultimo valor calculado', {})
    .help()
    .argv;

module.exports = {
    argv
}