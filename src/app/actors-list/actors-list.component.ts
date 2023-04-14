import { Component, Input, OnInit } from '@angular/core';
import { ActoresService } from '../actores.service';
import { Personaje } from '../models/personaje';
import { PersonajesService } from '../personajes.service';
import { Actor } from '../models/actor';
import { Pelicula } from '../models/pelicula';


@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit {
  @Input() pelicula: Pelicula;

  personajes: Personaje[];
  actores: Actor[];
  personajesPelicula: Personaje[];
  test: string[];
  isVisible: Boolean; // TODO: No funciona, hay que ajustar para que cada personaje tenga su valor isVisible
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


  onClick(personaje: Personaje) {
    this.isVisible = !this.isVisible;
  }

  delete(personaje: Personaje) {
    this.personajesService.delete(personaje)
  }


}
