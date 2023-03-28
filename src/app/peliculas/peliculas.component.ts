import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[];

  constructor(private peliculasService: PeliculasService) {
  }

  getPeliculas(): void {
    this.peliculas = this.peliculasService.peliculas;
  }

  ngOnInit(): void {
    this.getPeliculas();
  }

}
