class Persona{

    static contadorPersona = 0;
    
    constructor(nombre,apellido,edad){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad
    }
    //get set id
    get idPersona(){
        return this._idPersona;
    }
    set idPersona(id){
        this._idPersona= id;
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
        return this._idPersona + this._nombre + " " + this._apellido + " tiene la edad de: " + this._edad
    }
}
class Empleado extends Persona{
    static contadorEmpleado = 0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado
    }
     //get set id
     get edad(){
        return this._idEmpleado;
    }
     //get set sueldo
     get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo= sueldo;
    }
    toString(){
       return super.toString + " el empleado con ID " + this._idEmpleado + " Su sueldo es: " + this._sueldo  
    }
}

class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(nombre,apellido,edad,){
        super(nombre,apellido,edad)
        this._fechaRegistro = new Date();
        this._idCliente = ++Cliente.contadorCliente
    }
     //get set id
     get edad(){
        return this._idEmpleado;
    }

      //get set fecha registro
      get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro= fechaRegistro;
    }

    toString(){
        return super.toString + " Cliente N: "+ this._idCliente + " Con fecha de registro del: " + this._fechaRegistro
    }
}