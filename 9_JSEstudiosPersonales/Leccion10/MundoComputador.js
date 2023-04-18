class DispositivosEntrada{
    //constructor de clase
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    //Get Set tipoEntrada
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    //Get Set marca
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    /* toString(){
        return `Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    } */
 }

 class Raton extends DispositivosEntrada{
    static contadorRaton = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRaton;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: ${this._idRaton}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
    }
 }

 class Teclado extends DispositivosEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `teclado: ${this._idTeclado}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
    }
 }

 class Monitor{
    static contadorMonitores = 0;
    constructor(marca,pulgadas){
        this._marca = marca;
        this._pulgadas = pulgadas;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    //get monitor
    get idMotinor(){
        return this._idMonitor
    }
    //get set marca
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca;
    }
    //get set pulgadas
    get pulgadas(){
        return this._pulgadas
    }
    set pulgadas(pulgadas){
        this._pulgadas = pulgadas;
    }
    toString(){
        return `Monitor ID: ${this._idMonitor}, Marca: ${this._marca}, Pulgadas: ${this._pulgadas}`
    }
 }

 class Computadora{
    static contadorComputadores = 0;
    constructor(nombre){
        this._nombre = nombre;
        this._idComputadora = ++Computadora.contadorComputadores;
        this._monitor = [];
        this._teclado = [];
        this._raton = [];
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    agregarMonitor(monitor){
        this._monitor.push(monitor)      
    }

    agregarTeclado(teclado){
        this._teclado.push(teclado)
    }

    agregarRaton(raton){
        this._raton.push(raton)
    }

    toString(){
        return `Computadora Id: ${this._idComputadora} ${this._nombre}:\nMonitor:\n{${this._monitor}},\nTeclado:\n{${this._teclado}}, \nMouse:\n{${this._monitor}}`
    }
}

 class Orden{
    static contadorOrden = 0;
    constructor(){
        this._computadoras = [];
        this._idOrden = ++Orden.contadorOrden;
    }
    get idOrden(){
        return this._idOrden
    }
    agregarComputadoras(compu){
        this._computadoras.push(compu)
    }
    mostrarOrden(){
        let compusOrden = '';
        for (let compus of this._computadoras ){
            compusOrden += '\n{'+compus.toString() + '}';
        }
        return compusOrden;
    }
    toString(){
        return `Orden ID: ${this._idOrden}: ${this.mostrarOrden()}`
    }
 }
 let monitor1 = new Monitor("samsung",18);
 console.log(monitor1.toString())

 let raton1 = new Raton("usb","rata");
console.log(raton1.toString());

 let dispositivo1 = new DispositivosEntrada("USB","Logitech")
 console.log(dispositivo1.toString())
 let teclado1 = new Teclado('usb','dell')
 let compu1 = new Computadora("makintoch");
 compu1.agregarMonitor(monitor1);
 compu1.agregarRaton(raton1)
 compu1.agregarTeclado(teclado1)
 console.log(compu1.toString())

 teclado1 = new Teclado('bluethoot','wea');
 console.log(teclado1.toString())

 let compu2 = new Computadora("makintoch");
 compu2.agregarMonitor(monitor1);
 compu2.agregarRaton(raton1)
 compu2.agregarTeclado(teclado1)

 let orden1 = new Orden();
 orden1.agregarComputadoras(compu1);
 orden1.agregarComputadoras(compu2);
 orden1.mostrarOrden();
 console.log(orden1.toString())
 