import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  public getUserData(token: any): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.get<any>(`${enviroment.api_url}api/user_data`, {"headers": headers});
  }

  public getRol(token: any): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.get<any>(`${enviroment.api_url}api/rol_usuario`, {"headers": headers});
  }
}
