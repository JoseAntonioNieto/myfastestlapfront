import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CircuitosComponent } from './circuitos/circuitos.component';
import { CircuitoComponent } from './circuitos/circuito/circuito.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { AdminReservasComponent } from './panel-admin/admin-reservas/admin-reservas.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "circuitos", component: CircuitosComponent},
  {path: "circuito/:id", component: CircuitoComponent},
  {path: "reservas", component: MisReservasComponent},
  {path: "panelAdmin",  component: PanelAdminComponent},
  {path: "admin/reservas/:id", component: AdminReservasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
