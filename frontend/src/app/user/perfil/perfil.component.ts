import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user.model';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  userInfo!: User;


  constructor(private authServices: AuthService){}

  ngOnInit(){
    this.obtenerInfoUser()
  }

  private obtenerInfoUser(){
    this.userInfo = JSON.parse(this.authServices.isLoggedUser())
  }

}
