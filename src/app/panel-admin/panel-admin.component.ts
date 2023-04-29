import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';
import { CircuitosService } from '../services/circuitos/circuitos.service';
import { Sesion } from '../clases/sesion';
import { ReservasService } from '../services/reservas/reservas.service';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  circuitos: any;
  circuitoActual: any;
  circuitoInsertar: Sesion;
  reservas: any;

  constructor(public readonly google: GoogleApiService, private circutoService: CircuitosService, private reservasService: ReservasService) {
    this.circuitoInsertar = new Sesion();
    google.userProfileSubject.subscribe()
  }

  obtenerReseras() {
    this.reservasService.getReservas(this.circuitoActual.id_circuito).subscribe(data => {
      this.reservas = data;
    });
  }

  obtenerCircuitos() {
    this.circutoService.getCircuitosUsuario(this.google.getToken()).subscribe(data => {
      console.log(JSON.stringify(data));
      this.circuitos = data;
      this.circuitoActual = this.circuitos[0];
      this.reservasService.getReservas(data[0].id_circuito).subscribe(data => {
        this.reservas = data;
        console.log(JSON.stringify(data));
      });
      console.log(JSON.stringify(this.circuitos));
    })
  }

  cambiarCircuito(circuito: string) {
    console.log(circuito);
    this.circuitoActual = this.circuitos[parseInt(circuito)];
    this.obtenerReseras();
  }

  insertarSesion() {
    this.reservasService.newReserva(this.google.getToken(), this.circuitoActual.id_circuito, this.circuitoInsertar.nombre , this.circuitoInsertar.fecha, this.circuitoInsertar.horaInicio, this.circuitoInsertar.horaFin).subscribe(data => {
      console.log(JSON.stringify(data));
    })
  }

  ngOnInit(): void {
    this.obtenerCircuitos();
  }


}
