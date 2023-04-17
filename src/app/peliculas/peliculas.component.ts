import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { Personaje } from '../models/personaje';
import { Actor } from '../models/actor';

import { PeliculasService } from '../peliculas.service';
import { PersonajesService } from '../personajes.service';
import { ActoresService } from '../actores.service';
import { FormsModule } from '@angular/forms';
import { Storage, listAll, ref, uploadBytes, getDownloadURL, StorageReference } from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageService } from '../storage.service';




@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[];
  editar: boolean = false;
  tituloForm: string;
  anyoForm: number;
  duracionHForm: number;
  duracionMForm: number;
  overviewForm: string;
  imageForm: any;
  $event: any;
  previsualizacion: string = "";
  imagesRefs: StorageReference[];
  //imageUrl: string;

  //variables para enviar mensaje de comprobacion

  //variables formulario agregacion pelicula
  agregar: boolean = false;
  newTitulo: string;
  newAnyo: number;
  newDuracionH: number;
  newDuracionM: number;
  newOverview: string;

  //variables formulario agregacion actor/personaje
  agregarActor: boolean = false;
  newNombre: string;
  newClip: string;
  newEdad: string;
  newImagenActor: string;
  newNacionalidad: string;
  newVivo: string;
  newNombrePersonaje: string;
  newDescripcion: string;

  constructor(private peliculasService: PeliculasService, private actoresService: ActoresService, private personajesService: PersonajesService, private storage: Storage, private sanitizer: DomSanitizer, private storageService: StorageService) {
  }


  ngOnInit(): void {
    //this.getPeliculas();
    this.peliculasService.getAll().subscribe(
      peliculas => {
        this.peliculas = peliculas;
      }
    )
    this.imagesRefs = this.storageService.getAllImages();
  }

  edit(): void {
    this.editar = !this.editar;
    this.previsualizacion = "";
  }

  changeAgregar(): void {
    this.agregar = !this.agregar;
    this.previsualizacion = "";
  }

  changeAgregarActor(): void {
    this.agregarActor = !this.agregarActor;
    this.previsualizacion = "";
  }

  editPelicula(pelicula: Pelicula): void {
    this.edit();
    this.overviewForm = pelicula.argumento;
    this.tituloForm = pelicula.titulo;
    this.anyoForm = pelicula.anyo;
    this.duracionHForm = pelicula.duracionHoras;
    this.duracionMForm = pelicula.duracionMinutos;
  }

  savePelicula(pelicula: Pelicula): void {
    if (pelicula.titulo != this.tituloForm) {
      pelicula.titulo = this.tituloForm;
    }
    if (pelicula.duracionHoras != this.duracionHForm) {
      pelicula.duracionHoras = this.duracionHForm;
    }
    if (pelicula.duracionMinutos != this.duracionMForm) {
      pelicula.duracionMinutos = this.duracionMForm;
    }
    if (pelicula.anyo != this.anyoForm) {
      pelicula.anyo = this.anyoForm;
    }
    if (pelicula.argumento != this.overviewForm) {
      pelicula.argumento = this.overviewForm;
    }

    if (this.previsualizacion != "") {
      this.upload(this.imageForm, pelicula);
    }
    else {
      this.peliculasService.update(pelicula);
      this.edit();
    }
  }

  async addActor(value: any, pelicula: Pelicula) {

    //Primero crea el actor, y con la id generada del actor, se crea el personaje
    const formValues = {
      nombre: value.newNombre,
      vivo: value.newVivo === "true" && true,
      imagen: value.newImagenActor,
      clip: value.newClip,
      edad: value.newEdad,
      nacionalidad: value.newNacionalidad,
    };
    const newActorRes = await this.actoresService.add(formValues);
    const newActor = await this.actoresService.findOneById(newActorRes.id).then((obj: any) => new Actor(newActorRes.id, obj.nombre, obj.edad, obj.nacionalidad, obj.clip, obj.vivo, this.imageForm))

    const newPersonaje = {
      nombrePersonaje: value.newNombrePersonaje,
      descripcion: value.newDescripcion,
      actor: `/actores/${newActorRes.id}`, // Listado de personajes no actualiza si añades actor desde form porque la referencia harcoded no funciona. Hay que buscar la manera de convertir a Reference
      pelicula: `/peliculas/${pelicula.id}`,  // Idem.Harcoded no funciona. Hay que buscar la manera de convertir a Reference
      imagen: value.newImagenActor,
    };
    this.uploadImageActor(this.imageForm, newActor);
    this.personajesService.add(newPersonaje);
  }

  //previsualizacion de la imagen
  previewFile($event: any) {
    this.$event = $event;
    this.imageForm = this.$event.target.files[0];
    this.extractBase64(this.imageForm)
      .then(
        (imagen: any) => {
          this.previsualizacion = imagen.base;
        }
      )
      .catch(error => console.log(error))
  }

  //sube la imagen al storage
  async upload(image: any, pelicula: Pelicula) {

    const reference = ref(this.storage, `assets/images/films/${image.name}`);  //referencia a la imagen
    uploadBytes(reference, image)
      .then(
        response => {
          for (let image of this.imagesRefs) {
            if (image.name == this.imageForm.name) {
              getDownloadURL(image)
                .then(
                  (response) => {
                    pelicula.image = response
                    console.log(pelicula.image);
                    this.peliculasService.update(pelicula);
                    this.edit();
                  }
                )
                .catch((error) => console.log(error))

            }
          }
        }
      )
      .catch(error => console.log(error))
  }


  //sube la imagen al storage
  async uploadImageActor(image: any, actor: Actor) {
    const reference = ref(this.storage, `assets/images/films/${image.name}`);  //referencia a la imagen
    uploadBytes(reference, image)
      .then(
        response => {
          for (let image of this.imagesRefs) {
            if (image.name == this.imageForm.name) {
              getDownloadURL(image)
                .then(
                  (response) => {
                    actor.imagen = response
                    console.log('actor.imagen TRAS UPLOAD',);
                    this.actoresService.update(actor);
                    this.changeAgregarActor();
                  }
                )
                .catch((error) => console.log(error))

            }
          }
        }
      )
      .catch(error => console.log(error))
  }

  //pasa la imagen a base 64 para la previsualizacion
  extractBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unImg = window.URL.createObjectURL($event);
      const img = this.sanitizer.bypassSecurityTrustUrl(unImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      null;
    }
  })

}
