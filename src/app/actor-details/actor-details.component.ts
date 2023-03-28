import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActoresService } from '../actores.service';
import { Actor } from '../models/actor';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css'],
})
export class ActorDetailsComponent {
  actorId: number;
  actor: Actor;

  constructor(private actoresService: ActoresService, private route:ActivatedRoute, private router:Router) {
  //  this.actor = actoresService.actores;
  }

  ngOnInit(): void{
    this.actorId= this.route.snapshot.params['id'];	  
    this.actor=  this.actoresService.findOneById(this.actorId);
  }
}
