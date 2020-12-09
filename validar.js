const { getLast } = require('./saveLast');

const validar = (value) => {
    if (Number(value)) {
        return value;
    } else if (value === 'last') {
        return getLast();
    } else {
        return 0;
    }
}

module.exports = {
    validar
}