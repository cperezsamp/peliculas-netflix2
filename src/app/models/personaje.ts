import { Actor } from './actor';
import { Pelicula } from './pelicula';

export class Personaje {
    actor: Actor;
    pelicula: Pelicula;
    nombrePersonaje: string;
    descripcion: string;
    id: string;
    imagen: string;

    constructor(actor: Actor, nombrePersonaje: string, descripcion: string, imagen: string) {
        this.actor = actor;
        this.nombrePersonaje = nombrePersonaje;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

}
