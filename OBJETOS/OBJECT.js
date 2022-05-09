// constructor 
class carro{
constructor(marca, modelo){
 this._marca = marca;
 this._modelo= modelo;
 }

 set marca(marca){
    this._marca = marca;
 }
 set modelo(modelo){
    this._modelo = modelo;

 }
  get marca(){
return this._marca;
  }
  get modelo(){
    return this._modelo;
}
 infcarro(){
     return `AUTOMOVIL ${this._marca} MODELO ${this._modelo}`;
 }
}

//instancia
var a = new carro();
var b = new carro("chevrolet","onix")
a._marca= "renaurrlt";
b.modelo= "corsa";
console.log(a._marca);
console.log(b._modelo);

//LIBRO

class libro{
    constructor(titulo,editorial,autor,año,fechimp, numpag){
        this._titulo = titulo;
        this._editorial= editorial;
        this._autor= autor;
        this._año = año;
        this._fechimp= fechimp;
        this._numpag= numpag;   
    }
    set titulo(titulo){
        this._titulo = titulo;
     }
     set editorial(editorial){
        this._editorial = editorial;
     }
     set autor(autor){
        this._autor = autor;
     }
     set año(año){
        this._año = año;
     }
     set fechimp(fechimp){
        this._fechimp = fechimp;
    }
    set numpag(numpag){
        this._numpag = numpag;
    }
     get titulo(){
     return this._titulo;
    }
    get editorial(){
    return this._editorial;
    }
    get autor(){
    return this._autor;
    }
    get año(){
    return this._año;
    }
    get fechimp(){
    return this._fechimp;
    }  
    get numpag(){
    return this._numpag;
    }
    CambioLibro(){
      function cambio(){
         if(this._año>10){
            return 'CAMBIA'
         }else{
            return 'SIGUE CON EL LIBRO'
         }
      }
    }

    TIEMP(){
       function tiempo(){
           
       }
    }
} 

var a= new libro();
var b= new libro (`yo antes de ti`,`panamericana`,`gabriel garcia marquez`,`1980`,`28/10/2014`,`400`)
console.log(b)
console.log(a.CambioLibro());


// TIEMPO DE LECTURA 


