import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import "firebase/compat/storage"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebaseConfig)

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  

  constructor(private afs: AngularFirestore) { }

  async subirImagen(nombre:string, imgBase64:any){
    const storareRef = firebase.storage().ref();
    try{
      //let storageRef = firebase.storage().ref();
      let respuesta= await storareRef.child("galeria/"+nombre).putString(imgBase64,'data_url');
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    }catch(err){
      console.log(err);
     return null;
    }
  }

  getObras(): Observable<any[]>{
    const refObras = this.afs.collection("obras");

    return refObras.valueChanges();
  }

}
