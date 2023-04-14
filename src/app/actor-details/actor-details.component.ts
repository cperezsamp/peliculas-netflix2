import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActoresService } from '../actores.service';
import { Actor } from '../models/actor';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css'],
})
export class ActorDetailsComponent {
  actorId: number;
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
    this.actorId = this.route.snapshot.params['id'];
    this.actor = this.actoresService.findOneById(this.actorId);
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
    this.actoresService.updateActor(this.actorId, updatedActor);
    this.actor = updatedActor;
    this.isEditMode = false;
  }
}
