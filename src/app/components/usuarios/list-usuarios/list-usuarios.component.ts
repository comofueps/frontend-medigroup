import { Component, OnInit, input } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioI } from '../../../models/Usuario';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule, ButtonDirective } from 'primeng/button';
import Swal from 'sweetalert2';
import { UsuarioDetallesI } from '../../../models/Progreso';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-usuarios',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    RouterLink,
    ButtonDirective,
  ],
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css',
})
export class ListUsuariosComponent implements OnInit {
  public usuarios: UsuarioI[] = [];
  constructor(private usuarioService: UsuarioService, private router: Router) {}
  ngOnInit(): void {
    this.mostrarUsuarios();
  }

  selectedDate: string | undefined;
  alerta2(usuarioId: string) {
    console.log(usuarioId);
    Swal.fire({
      title: 'Ingrese una fecha',
      input: 'date',
      icon: 'info',
      // didOpen: () => {
      //   const today = new Date().toISOString();
      //         (Swal.getInput() as HTMLInputElement).min = today.split('T')[0];
      // },
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.selectedDate = result.value;
        Swal.fire('Fecha seleccionada', this.selectedDate, 'success').then(
          () => {
            if (usuarioId && this.selectedDate) {
              const today = new Date(this.selectedDate);
              today.setUTCHours(0, 0, 0, 0);
              // Convertir la fecha al formato ISO
              const formattedDate = today.toISOString();
              this.router.navigate(['/progreso', usuarioId, formattedDate]);
              console.log(new Date(this.selectedDate));
              console.log(today);
            } else {
              console.error('Usuario ID o fecha no definido');
            }
          }
        );
      }
    });
  }

  async showSwalDialog(usuarioId:string,nombre:string,apellido:string) {
    const { value: formValues } =  await Swal.fire({
      title: 'Agendar cita para '+nombre +' '+apellido,
      
      html: `
        <input id="swal-input1" class="swal2-input">
        <input id="swal-input2" class="swal2-input">
        <input id="swal-input3" class="swal2-input-date">
      `,
      input:'date',
      focusConfirm: false,
      preConfirm: () => {
        return [
          (document.getElementById('swal-input1') as HTMLInputElement).value,
          (document.getElementById('swal-input2') as HTMLInputElement).value,
        ];
      },
    });

    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
    }
  }

  alerta1(usuarioId: string) {
    console.log(usuarioId);
    Swal.fire({
      title: 'Ingrese una fecha',
      input: 'date',
      icon: 'info',
      // didOpen: () => {
      //   const today = new Date().toISOString();
      //         (Swal.getInput() as HTMLInputElement).min = today.split('T')[0];
      // },
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.selectedDate = result.value;
        Swal.fire('Fecha seleccionada', this.selectedDate, 'success').then(
          () => {
            if (usuarioId && this.selectedDate) {
              const today = new Date(this.selectedDate);
              today.setUTCHours(0, 0, 0, 0);
              // Convertir la fecha al formato ISO
              const formattedDate = today.toISOString();
              this.router.navigate(['/progreso', usuarioId, formattedDate]);
              console.log(new Date(this.selectedDate));
              console.log(today);
            } else {
              console.error('Usuario ID o fecha no definido');
            }
          }
        );
      }
    });
  }

  mostrarUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log(this.usuarios);
      },
    });
  }
}
