import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarobrasComponent } from './pages/buscarobras/buscarobras.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {path: "principal", component: PrincipalComponent},
  {path: "buscar-obras", component: BuscarobrasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  