import { Personaje } from './personaje';


export class Pelicula {


    titulo: string;
    duracionMinutos: number;
    duracionHoras: number;
    image: string;
    anyo: number;
    director: string;
    personajes: Personaje[] = [];
    argumento: string;
    id: number;



    constructor(titulo: string, duracionM: number, anyo: number, image: string, director: string, argumento: string) {
        this.titulo = titulo;
        this.duracionMinutos = parseFloat((duracionM / 60).toFixed(2).toString().split(".")[1]);
        this.duracionHoras = parseFloat((duracionM / 60).toFixed(2).toString().split(".")[0]);
        this.anyo = anyo;
        this.image = image;
        this.director = director;
        this.argumento = argumento;
    }

    addPersonaje(personaje: Personaje): void {
        this.personajes.push(personaje);
    }

    setImmediate(id: number) {
        this.id = id;
    }
}