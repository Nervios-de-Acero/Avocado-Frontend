import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Receta } from '../model/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private http = inject(HttpClient);

  constructor() { }
}
