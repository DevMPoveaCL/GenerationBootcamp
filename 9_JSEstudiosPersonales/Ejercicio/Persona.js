class Persona{
    static contadorPersona = 0;
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad
        this._idPersona = ++Persona.contadorPersona;
    }
    //get set id
    get idPersona(){
        return this._idPersona;
    }
   
    //get set nombre
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre= nombre;
    }
    //get set apellido
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido= apellido;
    }
    //get set edad
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad= edad;
    }
    toString(){
        return "ID: " + this._idPersona + ": "+this._nombre + " " + this._apellido + " tiene la edad de: " + this._edad 
    }
}

let persona1 = new Persona('Freddy','Cid',27)
console.log(persona1.toString())