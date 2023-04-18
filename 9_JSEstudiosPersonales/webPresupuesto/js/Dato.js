class Dato{
    constructor(descripcion,valor){
        this._descipcion = descripcion;
        this._valor = valor;
    }
    get descripcion(){
        return this._descipcion;
    }
    set descripcion(descripcion){
        this._descipcion = descripcion;
    }
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}