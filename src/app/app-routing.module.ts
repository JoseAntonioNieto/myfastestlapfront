import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CircuitosComponent } from './circuitos/circuitos.component';
import { MonzaComponent } from './circuitos/monza/monza.component';
import { NurburgringComponent } from './circuitos/nurburgring/nurburgring.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "circuitos", component: CircuitosComponent},
  {path: "circuitos/monza", component: MonzaComponent},
  {path: "circuitos/nurburgring", component: NurburgringComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
