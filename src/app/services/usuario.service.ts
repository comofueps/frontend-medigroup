import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioI } from '../models/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  API_URL: string = 'http://localhost:5000/api/users';
  constructor(private http: HttpClient) {}

  getAllUsuarios(): Observable<UsuarioI[]> {
    return this.http.get<UsuarioI[]>(this.API_URL);
  }
}
