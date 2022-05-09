// CONTEO DE  MAYUSCULAS Y MINUSCULAS 
var mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var minus = "abcdefghijklmnñopqrstuvwxyz";
for(var i = 0 ; i < mayus.length ; i++){
  if (p==mayus[i]){
    cont=cont+1
  }

  for(var i = 0 ; i < minus.length ; i++){
    if (p==minus[i]){
      cont=cont+1
   }
  }
}

var obj = new  p("hola");
console.log(p);
  console.log(obj());

// TABLA DE MULTIPLICAR 
var tabla=(n)=>{
    for (let i=1; i<=10; i++){
        multi = n * i;
        console.log(n + "x" + i + "=" + multi);
 }
}
console.log(tabla(7));

//Leer dos vectores.
//Hallar de cada uno del promedio y retornar el vector con mayor promedio


//CONTEO REPETICION DE UN NUMERO 
var num=3
var array = ['1','3','2','6','2','3','1','1'];

var cont = 0
for(var i = 0 ; i < array.length ; i++){
  if (num==array[i]){
    cont= cont+1
  }
}
console.log(cont());

//Leer un arreglo numérico y retornar desviación estandar

