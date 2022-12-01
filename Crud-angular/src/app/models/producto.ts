export class Producto{
    _id?:number;
    nombre:string;
    categoria:string;
    ubicacion:string;
    precio:number;
    estado:string;
    unidad:number;

    constructor(nombre:string,estado:string,unidad:number,categoria:string,ubicacion:string,precio:number,_id?:number){
        this.nombre=nombre;
        this.categoria=categoria;
        this.ubicacion=ubicacion;
        this.precio=precio;
        this._id=_id;
        this.estado=estado;
        this.unidad=unidad;
    }
}
