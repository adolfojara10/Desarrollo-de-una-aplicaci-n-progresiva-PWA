import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {OrderListModule} from 'primeng/orderlist';
import { Obra } from 'src/app/domain/obras';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-buscarobras',
  templateUrl: './buscarobras.component.html',
  styleUrls: ['./buscarobras.component.scss']
})
export class BuscarobrasComponent implements OnInit {

  obras: any;
  listaObras:any;
  confirmar: boolean = false;

  obra: Obra = new Obra;

  constructor(private router: Router, private orderLM: OrderListModule, private stororageService: StorageService) { }

  ngOnInit(): void {

    this.obras = this.stororageService.getObras();
    console.log(this.obras);

    this.obras.subscribe((data: any) => {
      console.log("datos:", data);
      this.listaObras = data;
    })
  
  }

  abrir(){
    this.router.navigate(['principal']);
  }
  
  editar(){
  }
  
  onSelectionChange(event:any){
    console.log("sss ", event.value[0].descripcion);
    let confirmar = confirm("Editar imagen");
    if (confirmar == true) {
      this.obra.id = event.value[0].id;
      this.obra.titulo = event.value[0].titulo;
      this.obra.autor = event.value[0].autor;
      this.obra.fecha = event.value[0].fecha;
      this.obra.descripcion = event.value[0].descripcion;
      this.obra.urlImagen = event.value[0].urlImagen;
      
      let params: NavigationExtras = {
        queryParams: {
          obra : this.obra
        }
      }
      this.router.navigate(['cargar-obras'], params);
    }
  }
}
 