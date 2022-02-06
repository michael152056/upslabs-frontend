import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoEventos'
})
export class TipoEventosPipe implements PipeTransform {

  transform(value: any, tipo: any): any {
    const resultPost = [];
    for(const post of value){
      if (post.tipo_evento.indexOf(tipo.toLowerCase())  > -1 || post.tipo_evento == tipo){
         resultPost.push(post);

      };

    };
    return resultPost;
  }
}