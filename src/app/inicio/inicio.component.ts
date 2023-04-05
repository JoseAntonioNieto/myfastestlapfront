import { Component } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';
import { UserDataService } from '../services/menu/user-data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  userInfo: any = null;

  constructor(public readonly google: GoogleApiService, private user_data: UserDataService) {
    google.userProfileSubject.subscribe(info => {
      this.userInfo = info;
    })
  }

  getToken() {
    return this.google.getToken();
  }

  isLoggedIn(): boolean {
    return this.google.isLoggedIn();
  }


  logout() {
    this.google.signOut();
  }
}
