export class Equipo{
    static forEach(arg0: (data: any) => void) {
      throw new Error('Method not implemented.');
    }
    _id?: number;
    codigo: string;
    equipo: string;
    modelo: string;
    marca: string;
    serie: string;
    ubicacion: string;
    estado: string;

    constructor(codigo : string, equipo: string,modelo: string, marca: string, serie: string, ubicacion: string, estado : string){
        this.codigo = codigo;
        this.equipo = equipo;
        this.modelo =  modelo;
        this.marca = marca;
        this.serie = serie;
        this.ubicacion = ubicacion;
        this.estado = estado;        
    }
}