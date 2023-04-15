import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje';
import { Actor } from '../models/actor';
import { Pelicula } from '../models/pelicula';
import { PersonajesService } from '../personajes.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-actors-form',
  templateUrl: './actors-form.component.html',
  styleUrls: ['./actors-form.component.css']
})
export class ActorsFormComponent implements OnInit {
  @Input() personaje: Personaje;
  nombrePersonajeForm: string;
  descripcionForm: string;

  constructor(private personajesService: PersonajesService) {
  }

  ngOnInit(): void {
    this.nombrePersonajeForm = this.personaje.nombrePersonaje;
    this.descripcionForm = this.personaje.descripcion;
  }

  savePersonaje() {

    if (this.personaje.nombrePersonaje != this.nombrePersonajeForm) {
      this.personaje.nombrePersonaje = this.nombrePersonajeForm;
    }
    if (this.personaje.descripcion != this.descripcionForm) {
      this.personaje.descripcion = this.descripcionForm;
    }
    this.personajesService.update(this.personaje);
  }
}
