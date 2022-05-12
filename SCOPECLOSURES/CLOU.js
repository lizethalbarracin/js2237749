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

//*******************************************************************************************************************************/

// CLASICA
function contador(inicio){
let i = inicio;
function incremento(){
    inicio++
    console.log(inicio)
}
return incremento;
}
 
const c = contador(10);
c();
c();

// FLECHA
const cont=(inicio)=>{
    let  i=inicio;
     return ()=>{
         inicio++;
         console.log(inicio);
     }
    }

const d= cont(1);
d();
d(); 

