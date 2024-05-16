import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLinkWithHref],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   loginObj: Login;
   errorMessage: string;

   constructor(private http: HttpClient, private router:Router){
    this.loginObj = new Login();
    this.errorMessage = '';
   }

   onLogin() {
    this.http.post('http://localhost:3008/login', this.loginObj).subscribe(
      (res: any) => {
        if (res.message == "Sesión iniciada") {
          alert("Login exitoso");
          localStorage.setItem('angularToken', res.token)
          localStorage.setItem('user', JSON.stringify(res.user))
          this.router.navigateByUrl('/feed')
        } else {
          alert("Error en el login: " + res.message);
          this.errorMessage = res.message;
        }
      },
      (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // Error del lado del cliente
          console.error("Error:", error.error.message);
        } else {
          // El backend devolvió un código de error.
          console.error(

            `Error en la solicitud: ${error.status}, ` +
            `Mensaje: ${error.error.message}`);
          this.errorMessage = error.error.message;
          alert(error.error.message);
        }
      }
    );
  }
}
export class Login {

  email: string;
  password: string;
  constructor() {
    this.email ='';
    this.password= '';
  }
}
