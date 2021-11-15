import { Injectable } from '@angular/core';
import firebase from '@firebase/app-compat';
import "firebase/compat/storage"

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  //storareRef = firebase.app().storage().ref();

  constructor() { }

  async subirImagen(nombre:string, imgBase64:any){
    /*try{
      //let storageRef = firebase.storage().ref();
      let respuesta= await this.storareRef.child("users/"+nombre).putString(imgBase64,'data_url');
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    }catch(err){
      console.log(err);
     return null;
    }*/
  }
}
