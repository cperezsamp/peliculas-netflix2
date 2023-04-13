import { Component, Input, OnInit } from '@angular/core';
import { ActoresService } from '../actores.service';
import { Personaje } from '../models/personaje';
import { PersonajesService } from '../personajes.service';
import { Actor } from '../models/actor';
import { Pelicula } from '../models/pelicula';


@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  @Input() pelicula: Pelicula;

  personajes: Personaje[];
  //actores: Actor[];  //no creo que aqui necesite los actores
  personajesPelicula: Personaje[];
  test: string[];
  

  constructor(private actoresService: ActoresService, private personajesService: PersonajesService) {
    
  }

  ngOnInit(): void{
    this.loadPersonajes();
  }


  loadPersonajes(){
    this.personajesService.getAll().subscribe(
      personajes => {
        this.personajes= personajes;
       }
    )
  }

  searchPersonajes(pelicula: Pelicula){
    for( let personaje of this.personajes){
      if(personaje.pelicula.id == pelicula.id){
        this.personajesPelicula.push(personaje);
      }
    }
  }

}
