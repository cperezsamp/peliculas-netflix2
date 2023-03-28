import { Injectable } from '@angular/core';
import { Pelicula } from './models/pelicula';
import { ActoresService } from './actores.service';
import { Personaje } from './models/personaje';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  //loQueElVientoSeLlevo: Pelicula;
  //elPadrino: Pelicula;
  peliculas: Pelicula[] = [];

  constructor(private actores: ActoresService) {


    this.peliculas.push(new Pelicula("Maverick", 130, 2022, "assets/images/films/maverick.jpeg", "Joseph Kosinski", "Tras más de treinta años de servicio como uno de los mejores aviadores de la Armada, Pete “Maverick” Mitchell (Tom Cruise) está en su casa, forzando los límites como valiente piloto de pruebas y esquivando el ascenso de rango que le dejaría en tierra. En el transcurso de unas sesiones de formación para que un destacamento de graduados de TOPGUN llevase a cabo una misión especializada que ningún piloto vivo había realizado, Maverick se encuentra con el teniente Bradley Bradshaw (Miles Teller), cuyo indicativo de llamada es “Rooster”, el hijo del difunto amigo de Maverick y oficial de intercepción y radar, el teniente Nick Bradshaw, también conocido como “Goose”."))
    this.peliculas[0].addPersonaje(new Personaje(actores.findByName("Tom Cruise"), "Pete Mitchell", "Instructor de vuelo"));
    this.peliculas[0].addPersonaje(new Personaje(actores.findByName("Miles Teller"), "Bradley Bradshaw", "Piloto aprendiz"));
    this.peliculas[0].addPersonaje(new Personaje(actores.findByName("Jon Hamm"), "Beau 'Cyclone' Simpson", "Comandante de las Fuerzas Aéreas Navales"));
    this.peliculas[0].addPersonaje(new Personaje(actores.findByName("Jennifer Connelly"), "Penelope 'Penny' Benjamin", "Madre soltera y dueña de un bar"));

    this.peliculas.push(new Pelicula("El padrino", 177, 1972, "assets/images/films/elpadrino.jpeg", "Victor Fleming", "La historia comienza en el verano de 1945, cuando se celebra la boda de Connie (Talia Shire) y Carlo Rizzi (Gianni Russo). Connie es la hija de Don Vito Corleone (Marlon Brando), cabeza de la familia Corleone, y jefe de una de las cinco familias que ejercen el mando de la Cosa Nostra en la ciudad de Nueva York. Con el argumento de que todo siciliano debe atender las peticiones que le hacen el día de la boda de su hija, Don Vito es visitado, en el primer plano de la acción, por Amerigo Bonasera, dueño de una funeraria."))
    this.peliculas[1].addPersonaje(new Personaje(actores.findByName("Marlon Brando"), "Don Vito Corleone", "Padrino"));
    this.peliculas[1].addPersonaje(new Personaje(actores.findByName("Al Pacino"), "Michael Corleone", "Hijo menor del padrino"));
    this.peliculas[1].addPersonaje(new Personaje(actores.findByName("Robert Duvall"), "Thomas Hagen", "Consejero"));
    this.peliculas[1].addPersonaje(new Personaje(actores.findByName("James Caan"), "Santino Corleone", "Hijo mayor del padrino"));

    this.peliculas.push(new Pelicula("Lo que el viento se llevo", 238, 1939, "assets/images/films/loqueelvientosellevo.jpeg", "Francis Ford Coppola", "En vísperas del inicio de la guerra de Secesión en 1861, la joven Scarlett O'Hara vive con sus padres y dos hermanas en «Tara», la plantación de algodón de su familia en Georgia. Scarlett se entera de que Ashley Wilkes, del que está enamorada en secreto, se va a casar con su prima Melanie Hamilton y que el compromiso será anunciado al día siguiente en una barbacoa que se va a celebrar en la casa de Ashley, la cercana plantación «Los doce robles»."))
    this.peliculas[2].addPersonaje(new Personaje(actores.findByName("Clark Gable"), "Rhett Butler ", "visitante de Charleston"));
    this.peliculas[2].addPersonaje(new Personaje(actores.findByName("Vivien Leigh"), "Scarlett O'Hara", "hija"));
    this.peliculas[2].addPersonaje(new Personaje(actores.findByName("Leslie Howard"), "Ashley Wilkes", "hijo"));
    this.peliculas[2].addPersonaje(new Personaje(actores.findByName("Olivia de Havilland"), "Melanie Hamilton", "prima"));

    /*
    this.loQueElVientoSeLlevo= new Pelicula("Lo que el viento se llevo", 238, 1939);
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.clarkGabel, "Rhett Butler ", "visitante de Charleston"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.leslieHoward, "Ashley Wilkes", "hijo"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.vivienLeigh, "Scarlett O'Hara", "hija"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.oliviadehavillan, "Melanie Hamilton", "prima"));
    
    this.elPadrino= new Pelicula("El padrino", 177, 1972);
    this.elPadrino.addPersonaje( new Personaje(actores.marlonBrando, "Don Vito Corleone", "Padrino"));
    this.elPadrino.addPersonaje( new Personaje(actores.alPacino, "Michael Corleone", "Hijo menor del padrino"));
    this.elPadrino.addPersonaje( new Personaje(actores.robertDubball, "Thomas Hagen", "Consejero"));
    this.elPadrino.addPersonaje( new Personaje(actores.jamesCaan, "Santino Corleone", "Hijo mayor del padrino"));*/
  }

}
