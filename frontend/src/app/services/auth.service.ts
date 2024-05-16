import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private apiUrl = "http://localhost:3008";

  constructor() { }



  isLoggedIn(): boolean {
    return !!localStorage.getItem('angularToken');
  }

  isLoggedUser(): string{
    const user = localStorage.getItem("user");
    return user ?? "";
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('angularToken');
  }

  // actualizarPerfil(user: any){
  // return this.http.put<any>(`${this.apiUrl}/usuario/actualizarPerfil`, user)

  // }
}
