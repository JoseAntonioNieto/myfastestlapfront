import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';
import { ReservasUsuarioService } from '../services/reservas_usuario/reservas-usuario.service';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {

  reservas: any[] = [];

  constructor(public readonly google: GoogleApiService, private reservasUsuarioService: ReservasUsuarioService) {
    google.userProfileSubject.subscribe()
  }

  obtenerReservas() {
    if (this.google.isLoggedIn()) {
      this.reservasUsuarioService.getReservasUsuario(this.google.getToken()).subscribe(
        (data) => {
          console.log(data);
          this.reservas = data;
        }
      );
    }
  }

  eliminarReserva(id: number, index: number) {
    this.reservasUsuarioService.deleteReservaUsuario(this.google.getToken(), id).subscribe(
      (data) => {
        console.log(data);

        if (data.eliminada == "si") {
          this.reservas.splice(index, 1);
        }
      }
    );
  }

  ngOnInit(): void {
    this.obtenerReservas();
  }
}
