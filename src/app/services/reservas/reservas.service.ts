import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private httpClient: HttpClient) { }

  public getReservas(idCircuito: number): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:5000/api/reservas/${idCircuito}`);
  }

  public postReserva(token: string ,id_reserva: number, matricula: string): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    const body = {
      matricula: matricula,
      id_reserva: id_reserva
    }
    return this.httpClient.post<any>("http://localhost:5000/api/usuario/reservas", body, {"headers": headers});
  }
}
