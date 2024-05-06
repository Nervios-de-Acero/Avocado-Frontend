import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserDTO } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = "";

  constructor() {}

  crearUser(data: UserDTO){
    return this.http.post<UserDTO>(this.apiUrl, data);
  }

  actualizarUser(id: number, data: UserDTO){
    return this.http.post<UserDTO>( `${this.apiUrl}/${id}`, data);
  }

  eliminarUser(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
