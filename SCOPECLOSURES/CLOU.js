//BLOQUES DE CODIGO
function alcancia(){
let ahorro=0;
function guardar(monedas){
    ahorro= ahorro + monedas;
    console.log(` tiene ${ahorro} pesos`)
}
return guardar;
}

const pedro= alcancia();
const maria= alcancia();
pedro(100);
maria(1);
pedro(300);
maria(5);