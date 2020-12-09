const elevar = (a, b) => {
    let resultado = 1;
    for (let i = 1; i <= b; i++) {
        resultado *= a;
    }
    return resultado;
}

module.exports = {
    elevar
}