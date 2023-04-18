class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(nombre,apellido,edad){
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