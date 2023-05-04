import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { enviroment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CircuitosService {

  constructor(private httpClient: HttpClient) { }

  public getCircuitos(pagina: number, pais?: string, nombre?: string): Observable<any> {
    const body = {
      pagina: pagina,
      pais: pais,
      nombre: nombre
    }
    return this.httpClient.post<any>(`${enviroment.api_url}api/getCircuitos`, body);
  }

  public getCircuito(idCircuito: number): Observable<any> {
    return this.httpClient.get<any>(`${enviroment.api_url}api/circuito/${idCircuito}`);
  }

  public getCircuitosUsuario(token: string) {
    const headers = new HttpHeaders().set("authentication", token);
    return this.httpClient.get<any>(`${enviroment.api_url}api/circuitosUsuario`, {"headers": headers});
  }
}
