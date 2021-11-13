import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscarobras',
  templateUrl: './buscarobras.component.html',
  styleUrls: ['./buscarobras.component.scss']
})
export class BuscarobrasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  abrir(){
    this.router.navigate(['principal']);
  }
}
