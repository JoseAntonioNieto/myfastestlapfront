import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CircuitosService } from 'src/app/services/circuitos/circuitos.service';
import { ReservasService } from 'src/app/services/reservas/reservas.service';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from 'src/app/services/vehiculos/vehiculos.service';
import { GoogleApiService } from 'src/app/services/google-api.service';

@Component({
  selector: 'app-circuito',
  templateUrl: './circuito.component.html',
  styleUrls: ['./circuito.component.css']
})
export class CircuitoComponent implements OnInit {

  id: number = 0;
  reservas: any;
  vehiculosReserva: any;
  reserva: any = {
    realizada: ""
  };
  private sub: any;

  constructor(private route: ActivatedRoute, private vehiculosService: VehiculosService, private reservasService: ReservasService, private googleService: GoogleApiService) {
    googleService.userProfileSubject.subscribe()
  }

  obtenerReseras() {
    this.reservasService.getReservas(this.id).subscribe(data => {
      this.reservas = data;
    });

  }

  obtenerVehiculos() {
    this.vehiculosService.getVehiculos(this.googleService.getToken()).subscribe(data => {
      this.vehiculosReserva = data;
    });
  }

  realizarReserva(id_reserva: number,  matricula: string) {
    this.reserva = {
      realizada: ""
    };
    this.reservasService.postReserva(this.googleService.getToken(), id_reserva, matricula).subscribe(data => {
      console.log(JSON.stringify(data));
      this.reserva = data;
    });
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });

  this.obtenerReseras();
  this.obtenerVehiculos();

  }
}
