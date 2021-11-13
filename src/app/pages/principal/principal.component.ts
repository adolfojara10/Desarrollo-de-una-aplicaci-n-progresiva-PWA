import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  abrir(){
    this.router.navigate(['buscar-obras']);
  }

  abrirCar(){
    this.router.navigate(['cargar-obras']);
  }
}
