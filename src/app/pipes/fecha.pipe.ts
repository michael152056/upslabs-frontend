import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  dia_inicio=''
  mes_inicio=''
  dia_fin=''
  mes_fin=''
  transform(value: any, fecha_inicio:any, fecha_fin:any): any {
    const resultPost = [];
    this.dia_inicio=fecha_inicio;
    this.mes_inicio= fecha_inicio ;
    this.dia_fin=fecha_fin;
    this.mes_fin=fecha_fin;

    for(const post of value){

      if (post.titulo_evento.toLowerCase().indexOf(this.mes_inicio.toLowerCase()) > -1 || post.dia_evento >= this.dia_inicio && post.mes_evento == this.mes_inicio && post.dia_evento<=this.dia_fin && post.mes_evento == this.mes_fin){
         resultPost.push(post);
      };


    };
    return resultPost;
  }

}