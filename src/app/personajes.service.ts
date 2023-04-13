import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Personaje } from './models/personaje';

@Injectable({
  providedIn: 'root'
})

export class PersonajesService {
  constructor(private firestore: Firestore){  //inyectar firestore para utilizarlo
  
  }

  //añadir peliculas
  add(personaje: Personaje){
    const coleccion= collection(this.firestore, 'personajes');  //utilizamos el objeto collection para indicar la coleccion, recibe como argumento el objeto firestore inyectado y el nombre del documento
    return addDoc(coleccion, personaje); //con el objeto addDoc guardamos en la base de datos, recibe el nombre de la coleccion y el objeto a guardar
  }

  //obtener peliculas
  getAll() :Observable<Personaje[]>{  //nos devolvera un observable que esta mirando el estado de la base de datos.
    const coleccion= collection(this.firestore, 'personajes'); //indicamos la colecion
    return collectionData(coleccion,  { idField: 'id' } ) as Observable<Personaje[]>;  //utilizamos el objeto collectionData que recupera datos, le indicamos la coleccion 
    // y el campo por el que vamos a ordenar la busqueda, en esete caso id, finalment lo casteamos al tipo Observable que hemos indicado que retorna esta funcion.
  } 

  //obtener una pelicula por su id
  getOneById(personaje: Personaje){
    return doc(this.firestore, `personajes/${personaje.id}`);
  }


  //eliminar una pelicula
  delete(personaje: Personaje){
    const documento= doc(this.firestore, `personajes/${personaje.id}`); //indicamos el documento con el objeto doc. Este recibe como argumento el objeto firestore y una cadena formada por "nombre coleccion/identificador documento"
    return deleteDoc(documento); //eliminamos el documento anterior con el objeto deleteDoc
  }

  //update pelicula, OK, ojo a las comillas, son acentos
  update(personaje: Personaje){
    const documento= doc(this.firestore, `personajes/${personaje.id}`); 
    console.log(personaje);
    return updateDoc(documento, { ...personaje});
  }


}