import { Component, OnInit } from '@angular/core';;
import { Pelicula } from '../models/pelicula';
import { PeliculasService } from '../peliculas.service';
import { FormsModule } from '@angular/forms';


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
  //peliculas: Observable<Pelicula[]>;

  constructor(private peliculasService: PeliculasService) {
  }

  getPeliculas(): void {
    //this.peliculas = this.peliculasService.peliculas;
    //this.peliculas = this.peliculasService.getAll();
  }

  ngOnInit(): void {
    //this.getPeliculas();
    this.peliculasService.getAll().subscribe(
     peliculas => {
      this.peliculas= peliculas;
      console.log(this.peliculas);
     }
    )
  }

  editPelicula(pelicula: Pelicula): void{
    this.editar= !this.editar;
    this.overviewForm= pelicula.argumento;
  }

  savePelicula(pelicula: Pelicula) :void{
    this.peliculasService.update(pelicula);
  }

}
