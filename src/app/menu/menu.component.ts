import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faS } from '@fortawesome/free-solid-svg-icons';
import {GoogleApiService} from "../services/google-api.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  faUser = faUser;
  fas = faS;

  userInfo?: any;

  constructor(public readonly google: GoogleApiService) {
    google.userProfileSubject.subscribe(info => {
      this.userInfo = info;
    })
  }

  isLoggedIn(): boolean {
    return this.google.isLoggedIn();
  }

  getToken(): string {
    return this.google.getToken();
  }

  logout() {
    this.google.signOut();
  }
}
