import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = "";

  constructor() {}

  create(data: User){
    return this.http.post<User>(this.apiUrl, data);
  }
}
