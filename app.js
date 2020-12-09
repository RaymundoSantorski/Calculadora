const argv = require('./config/yargs').argv;
const colors = require('colors');
const { sumar, restar, multiplicar, dividir, elevar } = require('./operadores/operaciones');
const { save, getLast } = require('./saveLast');
const { validar } = require('./validar');
let command = argv._[0];
let val = argv._;
let resultado = 0;

switch (command) {
    case 'sumar':
        resultado = sumar(validar(val[1]), validar(val[2]));
        if (val.length > 3) {
            for (let i = 3; i < val.length; i++) {
                resultado = sumar(resultado, validar(val[i]));
            }
        }
        save(resultado);
        console.log(`${resultado}`.green);
        break;
    case 'restar':
        resultado = restar(validar(val[1]), validar(val[2]));
        if (val.length > 3) {
            for (let i = 3; i < val.length; i++) {
                resultado = restar(resultado, validar(val[i]));
            }
        }
        save(resultado);
        console.log(`${resultado}`.green);
        break;
    case 'multiplicar':
        resultado = multiplicar(validar(val[1]), validar(val[2]));
        if (val.length > 3) {
            for (let i = 3; i < val.length; i++) {
                resultado = multiplicar(resultado, validar(val[i]));
            }
        }
        save(resultado);
        console.log(`${resultado}`.green);
        break;
    case 'dividir':
        resultado = dividir(validar(val[1]), validar(val[2]));
        if (val.length > 3) {
            for (let i = 3; i < val.length; i++) {
                resultado = dividir(resultado, validar(val[i]));
            }
        }
        save(resultado);
        console.log(`${resultado}`.green);
        break;
    case 'elevar':
        resultado = elevar(validar(val[1]), validar(val[2]));
        if (val.length > 3) {
            for (let i = 3; i < val.length; i++) {
                resultado = elevar(resultado, validar(val[i]));
            }
        }
        save(resultado);
        console.log(`${resultado}`.green);
        break;
    case 'saved':
        resultado = validar('last');
        console.log(`${resultado}`.blue);
}