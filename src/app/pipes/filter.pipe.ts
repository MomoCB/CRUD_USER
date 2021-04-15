import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tabla: any[], texto :string ): any {
  
    if(!texto) return tabla
    return tabla.filter(item => item.name.toUpperCase().includes(texto.toUpperCase()))


  }

}
