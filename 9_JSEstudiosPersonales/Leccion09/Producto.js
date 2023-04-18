class Producto{
    static contadorProductos = 0;
    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    //get producto
    get idProducto(){
        return this._idProducto
    }
    //get set nombre
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    //get set precio
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    //metodo toString
    toString(){
        return `ID Producto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5
    }
    constructor() {
        this._idOrden = ++Orden.contadorOrden;
        this._prductos = [];
        //this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden
    }
    agregarProducto(producto){
        if(this._prductos.length < Orden.MAX_PRODUCTOS){
            this._prductos.push(producto);
           //this._prductos[this._contadorProductosAgregados++] = producto
        }else{
            console.log("no sepuede agragar amas productos.")
        }
    }

    calcularTotal(){
        let totalVenta = 0
        for(let producto of this._prductos){
            totalVenta += producto.precio;//totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._prductos){
            productosOrden += '\n{'+ producto.toString()+'}' 
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`)
    }
}

let producto1 = new Producto ("salsa", 2000);
let producto2 = new Producto ("Mayonesa", 1600);
let producto3 = new Producto('Ketchup',3000)
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.mostrarOrden();
let producto4 = new Producto ("Tallarines", 800);
let producto5 = new Producto ("Salsa BBQ", 2800);
let producto6 = new Producto('Hamburguesa',300)
let orden2 = new Orden();
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto6);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto1);

orden2.mostrarOrden()
