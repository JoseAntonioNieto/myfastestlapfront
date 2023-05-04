import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { enviroment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ReservasUsuarioService {

  constructor(private httpClient: HttpClient) { }

  public getReservasUsuario(token: any): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.get<any>(`${enviroment.api_url}api/usuario/reservas`, {"headers": headers});
  }

  public deleteReservaUsuario(token: any, idReserva: number) {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.delete<any>(`${enviroment.api_url}api/usuario/reservas/${idReserva}`, {"headers": headers});
  }

  deleteReservaUsuarioAdmin(token: any, idReserva: number, matricula: string): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.delete<any>(`${enviroment.api_url}api/admin/reservas/${matricula}/${idReserva}`, {"headers": headers});
  }
}
