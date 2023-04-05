import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  public getUserData(token: any): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.get<any>("http://localhost:5000/api/user_data", {"headers": headers});
  }

  public getRol(token: any): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.get<any>("http://localhost:5000/api/rol_usuario", {"headers": headers});
  }
}
