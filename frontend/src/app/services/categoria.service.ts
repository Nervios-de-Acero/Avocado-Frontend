import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private http = inject(HttpClient);

  selectedCategoryId!: number;

  private apiUrl = "http://localhost:3008";

  constructor() { }

  getCategorias(){
    return this.http.get<any>(`${this.apiUrl}/receta/getCategorias`);
  }
}
