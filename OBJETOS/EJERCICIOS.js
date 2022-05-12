//CALCULADORA 
function aritmetica(A,B){
    this.A=A;
    this.B=B;
     this.suma= function(){
      suma= A + B;
      console.log(`LA SUMA ES `+ suma);
    } 
     this.rest= function(){
           rest =A - B;
       console.log(`LA RESTA ES`+ rest);
      }
        this.mult=function(){
          mult= A * B;
          console.log(`MULTIPLICACION`+ mult);
          }
         this.div= function(){
             div= A / B ;
             console.log(`LA DIVICION ES`+ div);
            }
    }
        
        var obj= new aritmetica(5,2)
        obj.suma();
        obj.rest();
        obj.mult();
        obj.div();

//********************************************************************************************************************************/

// ARREGLO
function Arreglos (arr){
 this.arr=arr;
this.suma=function(){
 var sum =0;
for (let i = 0; i < arr.length; i++) {
sum += arr[i];
}
return (`La suma de los número del arreglo es ${sum}`);
}
this.promedio=function(){
var sum =0;
var pro =arr.length;
for (let i = 0; i < arr.length; i++) {
sum += arr[i];
}
return (`El promedio de los número del arreglo es ${sum/pro}`)
}
this.mayor=function(){
var mayor=Math.max(...arr);
return (`El número mayor de los número del arreglo es ${mayor}`)
}
this.menor=function(){
var menor=Math.min(...arr);
return (`El número menor de los número del arreglo es ${menor}`)
 }
}

var obj=new Arreglos ([4, 1, 7, 8, 5, 3, 2, 4]);
console.log(obj.suma());
console.log(obj.promedio());
console.log(obj.mayor());
console.log(obj.menor());

//*******************************************************************************************************************************/

//FRACCIONES

// var factor=(frac1,frac2)=>{
//     this.frac1=frac1;
//     this.frac2=frac2;
   
//     this.suma= function(){
//         suma= frac1 + frac2;
//         console.log(`LA SUMA ES `+ suma);
  
//     }
//     this.mult= function(){
//        mult= frac1 * frac2;   
//         console.log(`LA MULTIPLICACION ES `+ mult);
//      }
//     }
    
//     var obj= new frac1(5,2)
//     var obj= new frac2(4,3)
//             obj.suma();
//             obj.mult();
            