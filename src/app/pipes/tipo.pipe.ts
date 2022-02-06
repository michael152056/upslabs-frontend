import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(value: any, por:any, dia: any, mes:any): any {
    const resultPost = [];
    for(const post of value){

            if ( post.titulo_evento.toLowerCase().indexOf(por.toLowerCase()) > -1 || por=='Más recientes' && post.dia_evento < dia && post.mes_evento == mes){
              resultPost.push(post);
            } else if(post.titulo_evento.toLowerCase().indexOf(por.toLowerCase()) > -1 || por=='Más antiguos' && post.dia_evento < dia && post.mes_evento < mes){
              resultPost.push(post);
            }else if(post.titulo_evento.toLowerCase().indexOf(por.toLowerCase()) > -1 || por=='Más votados'){
              resultPost.push(post);
            };

          };
        return resultPost;


  }

}