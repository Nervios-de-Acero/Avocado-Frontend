import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('angularToken');
  }

  logout() {
    localStorage.removeItem('angularToken');
  }
}