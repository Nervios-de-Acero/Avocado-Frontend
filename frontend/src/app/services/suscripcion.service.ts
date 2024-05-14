import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Suscripcion } from '../model/suscripcion.model';


@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  private http = inject(HttpClient);
  private url = "http://localhost:3008/receta/getProductos";

  constructor() { }

  getSuscripciones() {
    return this.http.get<any>(this.url);
  }
}
