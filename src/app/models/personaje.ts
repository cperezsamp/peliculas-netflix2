import { Actor } from './actor';

export class Personaje{
    actor: Actor;
    nombrePersonaje: string;
    descripcion: string;

    constructor(actor: Actor, nombrePersonaje: string, descripcion: string){
        this.actor= actor;
        this.nombrePersonaje= nombrePersonaje;
        this.descripcion= descripcion;
    }

}
