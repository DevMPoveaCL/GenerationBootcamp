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