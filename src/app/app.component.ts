import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Practica-Galeria';  

  constructor(private router:Router) { }

  abrir(){
    console.log("se abrio");
    this.router.navigate(['buscar-obras']);
    
  }
}
