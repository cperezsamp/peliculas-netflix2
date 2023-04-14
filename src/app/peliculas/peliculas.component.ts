import { Component, OnInit } from '@angular/core';;
import { Pelicula } from '../models/pelicula';
import { PeliculasService } from '../peliculas.service';
import { FormsModule } from '@angular/forms';
import { Storage, listAll, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';



@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[];
  editar: Boolean = false;
  tituloForm: string;
  anyoForm: number;
  duracionHForm: number;
  duracionMForm: number;
  overviewForm: string;
  imageForm: string;
  $event :any;
  preview: boolean = false;


  constructor(private peliculasService: PeliculasService, private storage: Storage) {
  }

  getPeliculas(): void {
    
  }

  ngOnInit(): void {
    //this.getPeliculas();
    this.peliculasService.getAll().subscribe(
     peliculas => {
      this.peliculas= peliculas;
      }
    )
  }

  edit(): void{
    this.editar= !this.editar;
  }

  changePreview(){
    this.preview= !this.preview;
  }

  editPelicula(pelicula: Pelicula): void{
    this.edit();
    this.overviewForm= pelicula.argumento;
    this.tituloForm= pelicula.titulo;
    this.anyoForm= pelicula.anyo;
    this.duracionHForm= pelicula.duracionHoras;
    this.duracionMForm= pelicula.duracionMinutos;
  }

  savePelicula(pelicula: Pelicula) :void{
    if(pelicula.titulo != this.tituloForm){
      pelicula.titulo= this.tituloForm;
    }
    if(pelicula.duracionHoras != this.duracionHForm){
      pelicula.duracionHoras= this.duracionHForm;
    }
    if(pelicula.duracionMinutos != this.duracionMForm){
      pelicula.duracionMinutos= this.duracionMForm;
    }
    if(pelicula.anyo != this.anyoForm){
      pelicula.anyo= this.anyoForm;
    }
    if(pelicula.argumento != this.overviewForm){
      pelicula.argumento= this.overviewForm;
    }
    this.peliculasService.update(pelicula);
    this.edit();
  }

  preUpload($event :any){
    this.$event= $event;
    this.changePreview();
  }

  previewFile(event :any){
    
  }

  upload($event :any){
    const image= $event.target.files[0];
    console.log(image);
    const reference= ref(this.storage, `assets/images/films/${image.name}`);  //referencia a la imagen
    uploadBytes(reference, image)
    .then(
      //guardar response.fullPath en el campo imagen de la pelicula en la base de datos??
      response => console.log(response)
    )
    .catch(error => console.log(error))
  }

  
}
