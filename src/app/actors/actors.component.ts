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
  actores: Actor[];
  personajesPelicula: Personaje[];
  test: string[];
  isVisible: Boolean;

  constructor(private actoresService: ActoresService, private personajesService: PersonajesService) {
  }

  ngOnInit(): void {
    this.loadPersonajes();
    this.loadActores();
    this.isVisible = false;
  }

  loadPersonajes() {
    this.personajesService.getAll().subscribe(
      personajes => {
        this.personajes = personajes;
      }
    )
  }

  loadActores() {
    this.actoresService.getAll().subscribe(
      actores => {
        this.actores = actores;
      }
    )
  }

  /*   searchPersonajes(pelicula: Pelicula) {
      this.loadPersonajes();
      for (let personaje of this.personajes) {
        if (personaje.pelicula.id == pelicula.id) {
          this.personajesPelicula.push(personaje);
        }
      }
    } */


  async onClick(personaje: Personaje) {
    this.isVisible = !this.isVisible;
    const actor = await this.getActor(personaje).then()
    console.log('actor desplegado', actor)
  }

  delete(personaje: Personaje) {
    this.personajesService.delete(personaje)
  }

  async getActor(personaje: Personaje) {
    const actorEncontrado = await this.actoresService.getOneById(personaje.actor);
    return actorEncontrado;
  }

}
