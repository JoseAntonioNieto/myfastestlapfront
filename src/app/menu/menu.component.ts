import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faS } from '@fortawesome/free-solid-svg-icons';
import {GoogleApiService} from "../services/google-api.service";
import { UserDataService } from '../services/menu/user-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  faUser = faUser;
  fas = faS;

  userInfo?: any;

  constructor(public readonly google: GoogleApiService, private user_data: UserDataService) {
    google.userProfileSubject.subscribe(info => {
      this.userInfo = info;
    })
  }

  getUserInfo(): void {
    this.user_data.getUserData(this.google.getToken()).subscribe(
      (data) => {
        this.userInfo = data;
      }
    )
  }

  obtenerImagen(): String {
    this.getUserInfo();
    return this.userInfo.picture;
  }

  obtenerNombre(): String {
    this.getUserInfo();
    return this.userInfo.name;
  }

  isLoggedIn(): boolean {
    return this.google.isLoggedIn();
  }


  logout() {
    this.google.signOut();
  }
}
