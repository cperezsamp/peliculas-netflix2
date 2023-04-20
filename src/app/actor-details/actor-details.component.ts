import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActoresService } from '../actores.service';
import { Actor } from '../models/actor';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css'],
})
export class ActorDetailsComponent implements OnInit {
  @Input() actorId: string;
  actor: Actor;
  editForm: FormGroup;
  isEditMode: boolean = false;
  nombreForm: string;
  edadForm: number;
  nacionalidadForm: string;
  imagenForm: string;
  clipForm: string;
  vivoForm: boolean;

  constructor(
    private actoresService: ActoresService,
    private formBuilder: FormBuilder



  ) {
    /*this.editForm = this.formBuilder.group({
    nombre: [''],
    edad: [''],
    nacionalidad: [''],
    imagen: [''],
    clip: [''],
    vivo: [false],
  });*/
}

  ngOnInit(): void {
    this.actoresService.findOneById(this.actorId).then((obj: any) => { this.actor = new Actor(obj.id, obj.nombre, obj.edad, obj.clip, obj.nacionalidad, obj.vivo, obj.imagen) });
this.editForm.setValue({

  nombreForm : this.actor.nombre,
  edadForm : this.actor.edad,
  nacionalidadForm :  this.actor.nacionalidad,
  imagenForm : this.actor.imagen,
  clipForm : this.actor.clip,
  vivoForm : this.actor.vivo
})

}

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }



  saveActorDetails() {

    if (this.actor.nombre != this.nombreForm) {
      this.actor.nombre = this.nombreForm;
    }
    if (this.actor.edad != this.edadForm) {
      this.actor.edad = this.edadForm;
    }
    if (this.actor.nacionalidad != this.nacionalidadForm) {
      this.actor.nacionalidad = this.nacionalidadForm;
    }
    if (this.actor.imagen != this.imagenForm) {
      this.actor.imagen = this.imagenForm;
    }
    if (this.actor.clip != this.clipForm) {
      this.actor.clip = this.clipForm;
    }
    if (this.actor.vivo != this.vivoForm) {
      this.actor.vivo = this.vivoForm;
    }
    this.actoresService.update(this.actor);
  }
}
