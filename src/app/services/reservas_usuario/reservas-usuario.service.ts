import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReservasUsuarioService {

  constructor(private httpClient: HttpClient) { }

  public getReservasUsuario(token: any): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.get<any>("http://localhost:5000/api/usuario/reservas", {"headers": headers});
  }

  public deleteReservaUsuario(token: any, idReserva: number) {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.delete<any>(`http://localhost:5000/api/usuario/reservas/${idReserva}`, {"headers": headers});
  }
}
