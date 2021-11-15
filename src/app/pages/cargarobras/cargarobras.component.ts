import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Obra } from 'src/app/domain/obras';
import { ObrasService } from 'src/app/service/obras.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-cargarobras',
  templateUrl: './cargarobras.component.html',
  styleUrls: ['./cargarobras.component.scss']
})
export class CargarobrasComponent implements OnInit {

  obra: Obra = new Obra();
  imagenes: any[] =[];
  obras: any;
  listaObras:any;


  constructor(private router: Router, private obraService: ObrasService, private storageService: StorageService) { }

  ngOnInit(): void {

  }

  abrir(){
    this.router.navigate(['principal']);
  }

  guardar(){
    console.log(this.obra);

    this.obraService.save(this.obra);
    
    let params: NavigationExtras = {
      queryParams: {
        obra : this.obra
      }
    }

  }
 
  cargarImagen(event:any){

    let archivos = event.target.files;
    let reader = new FileReader;
    let nombre = "PracticaWeb";

    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      console.log("Img ==> ", reader.result);
      this.imagenes.push(reader.result);
      this.storageService.subirImagen(nombre + " " + Date.now(), reader.result).then(urlImagen =>{console.log(urlImagen)});
    }
  }

}
