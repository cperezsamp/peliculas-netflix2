import { Injectable } from '@angular/core';
import { Actor } from './models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {


  actores: Actor[] = [];

  constructor() {

    this.actores.push(new Actor(1, "Clark Gable", 59, "clip.mp4", "estadounidense", false, "assets/images/actors/clarkgable.jpeg"));
    this.actores.push(new Actor(2, "Vivien Leigh", 53, "clip2.mp4", "britanica", false, "assets/images/actors/vivienleight.jpeg"));
    this.actores.push(new Actor(3, "Leslie Howard", 50, "clip3.mp4", "britanica", false, "assets/images/actors/lesliHoward.jpeg"));
    this.actores.push(new Actor(4, "Olivia de Havilland", 104, "clip4.mp4", "estadounidense", false, "assets/images/actors/oliviadehavillan.jpeg"));
    this.actores.push(new Actor(5, "Marlon Brando", 80, "clip.mp4", "estadounidense", false, "assets/images/actors/marlonbrando.jpeg"));
    this.actores.push(new Actor(6, "Al Pacino", 82, "clip2.mp4", "estadounidense", true, "assets/images/actors/alpacino.jpeg"));
    this.actores.push(new Actor(7, "Robert Duvall", 92, "clip3.mp4", "estadounidense", true, "assets/images/actors/roberduvall.jpeg"));
    this.actores.push(new Actor(8, "James Caan", 82, "clip4.mp4", "estadounidense", false, "assets/images/actors/jamescaan.jpeg"));
    this.actores.push(new Actor(9, "Tom Cruise", 60, "clip.mp4", "estadounidense", true, "assets/images/actors/tomcruise.jpeg"));
    this.actores.push(new Actor(10, "Miles Teller", 36, "clip2.mp4", "estadounidense", true, "assets/images/actors/milesteller.jpeg"));
    this.actores.push(new Actor(11, "Jon Hamm", 52, "clip3.mp4", "estadounidense", true, "assets/images/actors/jonhamm.jpeg"));
    this.actores.push(new Actor(12, "Jennifer Connelly", 52, "clip4.mp4", "estadounidense", true, "assets/images/actors/jenniferconnelly.jpeg"));

  }

  findByName(name: string): Actor {
    return this.actores.find(element => element.nombre === name) as Actor
  }

  //esto no devuelve nada
  findOneById(id: number): Actor {
    /*for(let i= 0; i<this.actores.length;i++){
      if(this.actores[i].id=== id){
        return this.actores[i];
      }
    }
    return null as Actor;*/

    console.log(id);
    console.log(this.actores.find(element => element.id === id) as Actor);
    return this.actores.find(element => element.id == id) as Actor;
  }

}
