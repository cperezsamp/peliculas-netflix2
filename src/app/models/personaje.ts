import { Actor } from './actor';
import { Pelicula } from './pelicula';

export class Personaje{
    actor: Actor;
    pelicula: Pelicula;
    nombrePersonaje: string;
    descripcion: string;
    id: number;

    constructor(actor: Actor, nombrePersonaje: string, descripcion: string){
        this.actor= actor;
        this.nombrePersonaje= nombrePersonaje;
        this.descripcion= descripcion;
    }

}
