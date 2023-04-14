import { Injectable } from '@angular/core';
import { Storage, listAll, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  images: string[]= [];

  constructor(private storage: Storage){ }


  //hay que impotar listAll para poder listar el contenido de la carpeta remota y getDownloadURL para poder ver la url de cada fichero
  getAllImages(){
    const images= ref(this.storage, 'assets/images/films');
    listAll(images)
    .then( async response => {
        this.images= [];
        for (let item of response.items){
          const url =  await getDownloadURL(item);  //tiene que estar con a la espera para funcionar y la funcion anonima como async
          this.images.push(url);
        }
      }
    ) 
    .catch( error => console.log(error))
    }
}
