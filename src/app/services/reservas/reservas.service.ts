import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { enviroment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private httpClient: HttpClient) { }

  public getReservas(idCircuito: number): Observable<any> {
    return this.httpClient.get<any>(`${enviroment.api_url}api/reservas/${idCircuito}`);
  }

  public postReserva(token: string ,id_reserva: number, matricula: string): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    const body = {
      matricula: matricula,
      id_reserva: id_reserva
    }
    return this.httpClient.post<any>(`${enviroment.api_url}api/usuario/reservas`, body, {"headers": headers});
  }

  public newReserva(token: string, idCircuito: number, nombre: string, fecha: string, horaInicio: string, horaFin: string): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    const body = {
      id_circuito: idCircuito,
      titulo: nombre,
      fecha: fecha,
      hora_inicio: horaInicio,
      hora_fin: horaFin,
    }
    return this.httpClient.post<any>(`${enviroment.api_url}api/reservas`, body, {"headers": headers});
  }

  public deleteReserva(token: string, idReserva: number): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.delete<any>(`${enviroment.api_url}api/reservas/${idReserva}`, {"headers": headers});
  }
}
