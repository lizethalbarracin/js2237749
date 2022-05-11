class Autopmuebles{
    constructor(categoria, nombre){
        this._categoria=categoria;
        this._nombre=nombre;
    }

    get categoria(){
        return this._categoria
    }

    set categoria(categoria){
        this._categoria=categoria;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre=nombre;
    }
}

class Productos extends Autopmuebles{
    constructor(categoria, nombre, cantidad, precio){
        super(categoria, nombre)
        this._cantidad=cantidad;
        this._precio=precio;
    }
}

var pro1=new Productos("Alcoba","ULTRA X",3, 2000000);
var pro2=new Productos("Sala","GOLDEN",2, 2500000);
var pro3=new Productos("Comedor", "FullZ", 1, 1500000);


class Astro{
    constructor(categoria,coleccion){
        this._categoria=categoria;
        this._coleccion=coleccion;
    }

    almacenar(Productos){
        this._coleccion.push(Productos)
    }

    getColeccion(){
        return this._coleccion;
    }
}

var colection=[];
var pro4=new Productos("Alcoba","ULTRA X",3,2000000);
var cate=new Productos("Alcoba");
console.log(`La categoria es ${cate.categoria} El nombre del producto es ${pro4.nombre}`)
cate.categoria="Alcoba";
pro4.nombre="ULTRA X";

var pro5=new Productos("Sala","ZEZE",4,1500000);
var cat2=new Productos("Sala");
console.log(`La categoria es ${cat2.categoria} El nombre del producto es ${pro5.nombre}`)
cat2.categoria="Sala";
pro5.nombre="ZEZE";
var Astro1=new Astro("Sala",colection);

Astro1.almacenar(pro4);
Astro1.almacenar(pro5);
console.log(Astro1.getColeccion());
