import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Obra } from 'src/app/domain/obras';
import { ObrasService } from 'src/app/service/obras.service';

@Component({
  selector: 'app-cargarobras',
  templateUrl: './cargarobras.component.html',
  styleUrls: ['./cargarobras.component.scss']
})
export class CargarobrasComponent implements OnInit {

  obra: Obra = new Obra();



  constructor(private router: Router, private obraService: ObrasService) { }

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

}
