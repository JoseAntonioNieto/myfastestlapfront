import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CircuitosComponent } from './circuitos/circuitos.component';
import { CircuitoComponent } from './circuitos/circuito/circuito.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "circuitos", component: CircuitosComponent},
  {path: "circuito/:id", component: CircuitoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
