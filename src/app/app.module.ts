import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {OAuthModule} from "angular-oauth2-oidc";
import { FormsModule } from "@angular/forms";
import { CircuitosComponent } from './circuitos/circuitos.component';
import { FooterComponent } from './footer/footer.component';
import { PickerModule } from "@ctrl/ngx-emoji-mart";
import { CircuitoComponent } from './circuitos/circuito/circuito.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { AdminReservasComponent } from './panel-admin/admin-reservas/admin-reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    CircuitosComponent,
    FooterComponent,
    CircuitoComponent,
    MisReservasComponent,
    PanelAdminComponent,
    AdminReservasComponent
  ],
  imports: [
    BrowserModule,
    PickerModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
