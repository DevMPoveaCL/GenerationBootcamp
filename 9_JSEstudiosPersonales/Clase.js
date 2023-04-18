class Marca {
    constructor(marca) {
        this._marca = marca
    }
    get marca() {
        return this._marca
    }
    set marca(marca) {
        marca = this._marca
    }
    toString() {
        return `marca: ${this._marca} \n`
    }
}
class Cerveza extends Marca {
    static contadorCerveza = 0;
    constructor(marca, nombre, description, envasado) {
        super(marca);
        this._id = ++Cerveza.contadorCerveza;
        this._nombre = nombre;
        this._description = description;
        this._envasado = envasado;
    }
    get id() {
        return this._id
    }
    get nombre() {
        return this._nombre
    }
    set nombre(nombre) {
        this._nombre = nombre
    }
    get description() {
        return this._description
    }
    get envasado() {
        return this._envasado
    }
    toString() {
        return
    }

}
let marca1 = new Marca('pesico')
let marca2 = new Marca('ccu')
let cerveza = new Cerveza('andina', 'jugo', 'jugo 1lt', 'tetrapak')
let cerveza1 = new Cerveza(marca1._marca, 'bavarian', 'cerveza de medio', 'lata');
marca1
marca2
console.log(cerveza1.toString())

let ascii = 'a'.charCodeAt(0)
let char = String.fromCharCode(ascii);
console.log(ascii)