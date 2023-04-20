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

  constructor(
    private actoresService: ActoresService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      nombre: [''],
      edad: [''],
      nacionalidad: [''],
      imagen: [''],
      clip: [''],
      vivo: [false],
    });
  }

  ngOnInit(): void {
    this.actoresService.findOneById(this.actorId).then((obj: any) => { this.actor = new Actor(obj.id, obj.nombre, obj.edad, obj.clip, obj.nacionalidad, obj.vivo, obj.imagen) });
    this.editForm.setValue({
      nombre: this.actor.nombre,
      edad: this.actor.edad,
      nacionalidad: this.actor.nacionalidad,
      imagen: this.actor.imagen,
      clip: this.actor.clip,
      vivo: this.actor.vivo,
    });
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {

    const updatedActor: Actor = {
      ...this.actor,
      ...this.editForm.value,
    };

    console.log('updatedActor', updatedActor) // updatedActor no compone bien los datos del formulario, por eso no se guarda 
    this.actoresService.update(updatedActor);
    this.actor = updatedActor;
    this.isEditMode = false;
  }
}
