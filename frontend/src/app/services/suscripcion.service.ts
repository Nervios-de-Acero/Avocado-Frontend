import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Suscripcion } from '../model/suscripcion.model';


@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  private http = inject(HttpClient);

  constructor() { }
}
