import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/compat/storage"
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebaseConfig)

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  

  constructor() { }

  async subirImagen(nombre:string, imgBase64:any){
    const storareRef = firebase.storage().ref();
    try{
      //let storageRef = firebase.storage().ref();
      let respuesta= await storareRef.child("users/"+nombre).putString(imgBase64,'data_url');
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    }catch(err){
      console.log(err);
     return null;
    }
  }
}
