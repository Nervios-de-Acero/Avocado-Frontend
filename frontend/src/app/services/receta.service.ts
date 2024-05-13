import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Receta} from '../model/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private http = inject(HttpClient);

  private apiUrl = "http://localhost:3008/receta/getRecetasFeed";

  constructor() { }

  getRecetas(id?: number) {
    const url = new URL(this.apiUrl);
    const category_id = id?.toString()
    // Si existe el category_id
    if(category_id){
      // El categoryId es como aparece en nuestro endpoint, tiene que ser igual
      url.searchParams.set("categoryId", category_id);
    }
    // En este caso una lista de objetos recetas
    // Pasarle el parametro de la url con toString para que sea texto
    return this.http.get<any>(url.toString());
  }

  getOne(id: number) {
    return this.http.get<any>(
      `http://localhost:3008/receta/getRecetaById?id=${id}`
    );
  }
}
