import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitasI } from '../models/Citas';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
  API_URL: string = 'http://localhost:5000/api/citas';
  constructor(private http: HttpClient) {}

  getCitas(): Observable<CitasI[]> {
    return this.http.get<CitasI[]>(this.API_URL);
  }
}
