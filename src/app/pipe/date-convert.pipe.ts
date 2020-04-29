import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConvert'
})
export class DateConvertPipe implements PipeTransform {

  transform(value:any, ...args: unknown[]): unknown {
    value=new Date(value)
    return value.getDate() +"/"+ (value.getMonth() + 1) + '/'+ value.getFullYear();
  }

}
