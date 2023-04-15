import { Component, OnInit } from '@angular/core';
import { CircuitosService } from '../services/circuitos/circuitos.service';
import { FiltroCircuitos } from '../clases/filtro-circuitos';

@Component({
  selector: 'app-circuitos',
  templateUrl: './circuitos.component.html',
  styleUrls: ['./circuitos.component.css']
})
export class CircuitosComponent implements OnInit {

  public circuitos?: any;
  public filtro: FiltroCircuitos;

  constructor(private servicioCircuitos: CircuitosService) {
    this.filtro = new FiltroCircuitos();
  }

  obtenerCircuitos() {
    this.servicioCircuitos.getVehiculos(this.filtro.pagina, this.filtro.pais, this.filtro.nombre).subscribe(
      (data) => {
        this.circuitos = data[0];
      }
    )
  }

  ngOnInit(): void {
    this.obtenerCircuitos();
  }

}
