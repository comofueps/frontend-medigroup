import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../../services/citas.service';
import { CitasI } from '../../../models/Citas';
import {TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-citas',
  standalone: true,
  imports: [TableModule,ButtonModule,RouterLink],
  templateUrl: './list-citas.component.html',
  styleUrl: './list-citas.component.css',
})
export class ListCitasComponent implements OnInit{
  public citas: CitasI[] = [];

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.mostrarCitas();
  }



  mostrarCitas() {
    this.citasService.getCitas().subscribe({
      next: (data) => {
        this.citas = data;
        console.log(this.citas)
      },
    });
  }
}
