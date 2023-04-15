import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CircuitosService {

  constructor(private httpClient: HttpClient) { }

  public getVehiculos(pagina: number, pais?: string, nombre?: string): Observable<any> {
    const body = {
      pagina: pagina,
      pais: pais,
      nombre: nombre
    }
    return this.httpClient.post<any>("http://localhost:5000/api/getCircuitos", body);
  }
}
