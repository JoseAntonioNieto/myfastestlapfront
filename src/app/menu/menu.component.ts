import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faS } from '@fortawesome/free-solid-svg-icons';
import {GoogleApiService} from "../services/google-api.service";
import { UserDataService } from '../services/menu/user-data.service';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  faUser = faUser;
  fas = faS;

  userInfo: any = null;
  rol_usuario: any = null;

  constructor(public readonly google: GoogleApiService, private user_data: UserDataService, private modalService: NgbModal) {
    google.userProfileSubject.subscribe(info => {
      this.userInfo = info;
    })
  }

  open(content: any) {
		this.modalService.open(content);
	}

  getToken() {
    return this.google.getToken();
  }

  getUserInfo(): void {
    if (this.userInfo == null) {
      this.user_data.getUserData(this.google.getToken()).subscribe(
        (data) => {
          this.userInfo = data;
        }
      )
      this.user_data.getRol(this.google.getToken()).subscribe(
        (data) => {
          this.rol_usuario = data.rol;
        }
      )
    }
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
