export class TarjetaModels{
    nombre:string;
    imageUrl:string;
    texto:string;

    constructor(n:string, u:string, t:string){
        this.nombre = n;
        this.imageUrl = u;
        this.texto=t;
    }
}