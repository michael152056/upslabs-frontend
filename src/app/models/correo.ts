export class Correo{
    static forEach(arg0: (data: any) => void) {
      throw new Error('Method not implemented.');
    }
    email:string;
    asunto: string;
    mensaje: string;


    constructor(emai:string,asunt: string, mms: string){
        this.email = emai;
        this.asunto = asunt;
        this.mensaje =  mms;


    }
}