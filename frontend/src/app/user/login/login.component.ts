import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   loginObj: Login;

   constructor(private http: HttpClient, private router:Router){
    this.loginObj = new Login();
   }

   onLogin() {
     this.http.post('https://jsonplaceholder.typicode.com/users', this.loginObj).subscribe((res:any)=>{
      if(res.id !== ''){
        alert("login Success");
        localStorage.setItem('angularToken', res.token)
        this.router.navigateByUrl('/feed')
      }else{
        alert(res.message)
      }
     })
   }
}

export class Login {

  Email: string;
  UserName: string;
  constructor() {
    this.Email ='';
    this.UserName= '';
  }
}
