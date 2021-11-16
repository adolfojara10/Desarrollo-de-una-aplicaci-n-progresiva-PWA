import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Obra } from '../domain/obras';


@Injectable({
  providedIn: 'root'
})
export class ObrasService {

  constructor(private afs: AngularFirestore) { }

  save(obra: Obra){
    
    const refObras = this.afs.collection("obras");

    if (obra.id == null){
      obra.id = this.afs.createId();
    }

    refObras.doc(obra.id).set(Object.assign({}, obra));

  }

}
