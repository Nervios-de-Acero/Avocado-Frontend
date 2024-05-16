import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Receta} from '../model/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private http = inject(HttpClient);

  private apiUrl = "http://localhost:3008";

  constructor() { }


  getRecetas(idCategoria?: number) {
    if(idCategoria){
      return this.http.get<any>(`${this.apiUrl}/receta/getRecetasFeed?categoria=${idCategoria}`);
    }
    // En este caso una lista de objetos recetas
    return this.http.get<any>(`${this.apiUrl}/receta/getRecetasFeed`);
  }


  getOne(id: number) {
    return this.http.get<any>(
      `${this.apiUrl}/receta/getRecetaById?id=${id}`
    );
  }
}
