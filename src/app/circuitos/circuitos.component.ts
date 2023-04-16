import { Component, OnInit } from '@angular/core';
import { CircuitosService } from '../services/circuitos/circuitos.service';
import { FiltroCircuitos } from '../clases/filtro-circuitos';
import { FormsModule } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-circuitos',
  templateUrl: './circuitos.component.html',
  styleUrls: ['./circuitos.component.css']
})
export class CircuitosComponent implements OnInit {

  public circuitos?: any;
  public filtro: FiltroCircuitos;
  public totalPaginas: number = 1;
  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;

  constructor(private servicioCircuitos: CircuitosService) {
    this.filtro = new FiltroCircuitos();
  }

  obtenerCircuitos() {
    this.servicioCircuitos.getVehiculos(this.filtro.pagina, this.filtro.pais, this.filtro.nombre).subscribe(
      (data) => {
        this.circuitos = data[0];
        this.totalPaginas =  Math.trunc(data[1].cantidadCircuitos / 9) + 1;
      }
    )
  }

  aplicarFiltros() {
    this.filtro.pagina = 1;
    this.servicioCircuitos.getVehiculos(this.filtro.pagina, this.filtro.pais, this.filtro.nombre).subscribe(
      (data) => {
        this.circuitos = data[0];
        this.totalPaginas =  Math.trunc(data[1].cantidadCircuitos / 9) + 1;
      }
    )
  }

  paginaAnterior() {
    if (this.filtro.pagina != 1) {
      this.filtro.pagina = this.filtro.pagina - 1;
      this.servicioCircuitos.getVehiculos(this.filtro.pagina, this.filtro.pais, this.filtro.nombre).subscribe(
        (data) => {
          this.circuitos = data[0];
          this.totalPaginas =  Math.trunc(data[1].cantidadCircuitos / 9) + 1;
        }
      )
    }
  }

  paginaSiguiente() {
    if (this.filtro.pagina < this.totalPaginas) {
      this.filtro.pagina = this.filtro.pagina + 1;
      this.servicioCircuitos.getVehiculos(this.filtro.pagina, this.filtro.pais, this.filtro.nombre).subscribe(
        (data) => {
          this.circuitos = data[0];
          this.totalPaginas =  Math.trunc(data[1].cantidadCircuitos / 9) + 1;
        }
      )
    }
  }

  ngOnInit(): void {
    this.obtenerCircuitos();
  }

}
