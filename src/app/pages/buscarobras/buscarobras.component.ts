import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OrderListModule} from 'primeng/orderlist';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-buscarobras',
  templateUrl: './buscarobras.component.html',
  styleUrls: ['./buscarobras.component.scss']
})
export class BuscarobrasComponent implements OnInit {

  obras: any;
  listaObras:any;

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
}
