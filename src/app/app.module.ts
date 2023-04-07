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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
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
