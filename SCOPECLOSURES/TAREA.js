// CONTEO DE MONEDAS

//clasica

function alcancia(ahorro, monedas) {
    function guardar() {
        return ahorro + monedas;
    }
    return guardar;
}

const pedro = alcancia(100, 150);
pedro();
console.log(`pedro tiene $ ${pedro()} pesos`);

const maria= alcancia(200,100);
    maria();
    console.log(`maria tiene $ ${maria()} pesos`);
