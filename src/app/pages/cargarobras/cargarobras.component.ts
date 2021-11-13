import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargarobras',
  templateUrl: './cargarobras.component.html',
  styleUrls: ['./cargarobras.component.scss']
})
export class CargarobrasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  abrir(){
    this.router.navigate(['principal']);
  }

}
