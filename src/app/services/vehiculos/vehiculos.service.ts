import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { enviroment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private httpClient: HttpClient) { }

  public getVehiculos(token: any): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.get<any>(`${enviroment.api_url}api/vehiculos`, {"headers": headers});
  }

  public postVehiculos(token: any, matricula: String, nombre_conductor: String, dni_titular: String, nombre_titular?: String): Observable<any> {
    const headers = new HttpHeaders().set("authentication", token);
    const body = {
      matricula: matricula,
      nombre_conductor: nombre_conductor,
      dni_titular: dni_titular,
      nombre_titular: nombre_titular
    }
    return this.httpClient.post<any>(`${enviroment.api_url}api/vehiculos`, body, {"headers": headers});
  }

  public deleteVehiculos(token: any, matricula: String) {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.delete<any>(`${enviroment.api_url}api/vehiculos/${matricula}`, {"headers": headers});
  }

  getVehiculosReserva(token: any, idReserva: number) {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.get<any>(`${enviroment.api_url}api/vehiculos/reservas/${idReserva}`, {"headers": headers});
  }
}
