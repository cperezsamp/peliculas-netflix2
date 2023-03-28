import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActoresService } from './actores.service';
import { PeliculasService } from './peliculas.service';
import { PlayerComponent } from './player/player.component';
import { BuscadorPipe } from './buscador.pipe';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { ActorsComponent } from './actors/actors.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';




@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    BuscadorPipe,
    BuscadorComponent,
    ActorsComponent,
    PeliculasComponent,
    ActorDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ActoresService,
    PeliculasService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
