import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtropaises'
})
export class FiltropaisesPipe implements PipeTransform {

  // transform(value: any, campo: string, ...args: any[]): any {
  transform(value: any, campo: string, args: string): any {
    if (!value) { return null; }
    if (!args) { return value; }

    console.log('value');
    console.log(value);

    console.log('campo');
    console.log(campo);

    console.log('args');
    console.log(args);

    return value.filter( item =>
        item[campo].toLowerCase().includes(args.toLowerCase())
      );

  }

}
