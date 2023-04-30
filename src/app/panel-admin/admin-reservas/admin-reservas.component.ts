import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleApiService } from 'src/app/services/google-api.service';
import { ReservasUsuarioService } from 'src/app/services/reservas_usuario/reservas-usuario.service';
import { VehiculosService } from 'src/app/services/vehiculos/vehiculos.service';

@Component({
  selector: 'app-admin-reservas',
  templateUrl: './admin-reservas.component.html',
  styleUrls: ['./admin-reservas.component.css']
})
export class AdminReservasComponent implements OnInit {
  id: number = 0;
  vehiculos: any;
  private sub: any;

  constructor(private route: ActivatedRoute, public readonly google: GoogleApiService, private vehiculosService: VehiculosService, private reservasUsuarioService: ReservasUsuarioService) {
    google.userProfileSubject.subscribe()
  }

  obtenerVehiculos() {
    this.vehiculosService.getVehiculosReserva(this.google.getToken(), this.id).subscribe(data => {
      this.vehiculos = data;
      console.log(data);
    })
  }

  eliminarReserva(matricula: string) {
    this.reservasUsuarioService.deleteReservaUsuarioAdmin(this.google.getToken(), this.id, matricula).subscribe(data => {
      console.log(data);
      this.obtenerVehiculos();
    })
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });

   this.obtenerVehiculos();
  }
}
