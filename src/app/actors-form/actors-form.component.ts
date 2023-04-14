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
  actor = new Actor("<sdasdfasdf>", "Clark Gable", 59, "clip.mp4", "estadounidense", false, "assets/images/actors/clarkgable.jpeg");
  pelicula = new Pelicula("Lo que el viento se llevo", 238, 152, 1939, "assets/images/actors/clarkgable.jpeg", "blabla");
  personaje = new Personaje(this.actor, this.pelicula, "Rhett Butler", "visitante de Charleston", "assets/images/actors/clarkgable.jpeg");
  submitted = false;
  editForm: FormGroup;
  isEditMode: boolean = false;


  ngOnInit(): void {
    this.editForm.setValue({
      nombre: this.personaje.nombrePersonaje,
      descripcion: this.personaje.descripcion,

    });
  }


  onSubmit() { this.submitted = true; }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }




}
