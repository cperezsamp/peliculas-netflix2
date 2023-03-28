import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActoresService } from './actores.service';
import { Actor } from './models/actor';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  actores: Actor[];

  constructor(private actoresService: ActoresService) {
    this.actores = actoresService.actores;
  }


  transform(value: any, ...args: any[]): any {
    const result = [];
    for (let actor of value) {
      if ((actor.nombre.toUpperCase()).includes(args[0].toUpperCase()) && (actor.edad > args[1] && actor.edad < args[2]) && (actor.nacionalidad.toUpperCase()).includes(args[3].toUpperCase())) {
        result.push(actor);
      }
    }
    return result;
  }

}
