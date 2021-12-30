import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutWord'
})
export class CutWordPipe implements PipeTransform {

  transform(value: string, limit?:number): any {
    if(!value) return  ""
    let atu = (limit) ? limit: 20 ;
    return value.substr(0,limit)
  }

}
