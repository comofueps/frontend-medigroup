import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDetallesI } from '../models/Progreso';

@Injectable({
  providedIn: 'root',
})
export class ProgresoService {
  //API_URL: string = 'http://localhost:5000/api/progreso/:id/:fecha';
  constructor(private http: HttpClient) {}

  getUsuarioDetalles(
    usuarioId: string,
    fecha: string
  ): Observable<UsuarioDetallesI[]> {
    const apiUrl = `http://localhost:5000/api/progreso/${usuarioId}/${fecha}`;
    return this.http.get<UsuarioDetallesI[]>(apiUrl);
  }
}
