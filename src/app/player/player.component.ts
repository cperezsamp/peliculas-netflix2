import { Component, Input, OnInit } from '@angular/core';
import { ActoresService } from '../actores.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})



export class PlayerComponent implements OnInit {

  @Input() actorId: string;
  video: string;
  isVideoLoaded: boolean;

  constructor(private actoresService: ActoresService) {
    this.isVideoLoaded = false;
  }

  ngOnInit() {
    this.actoresService.findOneById(this.actorId).then((obj: any) => {
      if (obj.clip.includes("firebasestorage")) {
        this.video = obj.clip;
      } else {
        this.video = `../assets/media/${obj.clip}`;
      }
      this.isVideoLoaded = true
    });
  }

}
