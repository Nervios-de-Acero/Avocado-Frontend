import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserDTO } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = "http://localhost:3008";

  constructor() {}

  crearUser(data: UserDTO){
    console.log(data);
    return this.http.post<UserDTO>(`${this.apiUrl}/registro`, data);
  }

  actualizarUser(id: number, data: UserDTO){
    return this.http.post<UserDTO>( `${this.apiUrl}/${id}`, data);
  }

  eliminarUser(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
