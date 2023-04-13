import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActoresService } from './actores.service';
import { PeliculasService } from './peliculas.service';
import { PersonajesService } from './personajes.service';
import { PlayerComponent } from './player/player.component';
import { BuscadorPipe } from './buscador.pipe';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { ActorsComponent } from './actors/actors.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { provideStorage,getStorage } from '@angular/fire/storage';




@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    BuscadorPipe,
    BuscadorComponent,
    ActorsComponent,
    PeliculasComponent,
    ActorDetailsComponent,
    UploadfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    ActoresService,
    PeliculasService,
    PersonajesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
