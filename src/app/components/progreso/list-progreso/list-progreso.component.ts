import { Component, OnInit } from '@angular/core';
import { UsuarioDetallesI } from '../../../models/Progreso';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ProgresoService } from '../../../services/progreso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-progreso',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './list-progreso.component.html',
  styleUrl: './list-progreso.component.css',
})
export class ListProgresoComponent implements OnInit {
  public usuarioDetalles: UsuarioDetallesI[] = [];
  constructor(
    private progresoServicie: ProgresoService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // Obtener los valores de usuarioId y fecha de la URL
    const usuarioId = this.route.snapshot.params['id'];
    const fecha = this.route.snapshot.params['fecha'];
    this.mostrarProgreso(usuarioId, fecha);
  }

  mostrarProgreso(usuarioId: string, fecha: string) {
    this.progresoServicie.getUsuarioDetalles(usuarioId, fecha).subscribe({
      next: (data) => {
        this.usuarioDetalles = data;
        console.log(this.usuarioDetalles);
      },
    });
  }
}
