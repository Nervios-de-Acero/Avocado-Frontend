import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {UserDTO } from '../../model/user.model';
import { MyValidators } from '../../utils/validators';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLinkWithHref],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})

export class RegistrarseComponent {



  registroForm = this.formBuilder.nonNullable.group({
    nombreCompleto: ['',[Validators.required, Validators.maxLength(150), Validators.minLength(3), Validators.pattern(/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]+$/)]],
    usuario: ['',[Validators.required, Validators.maxLength(15), Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+{}|:<>?]+$/)]],
    email: ['',[Validators.required, Validators.email]],
    contrasenia: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]+$/)]],
    confirmContrasenia: ['', [Validators.required]]
  },{
    validators: MyValidators.validContrasenia
  }
);


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router){}

  get nombreCompleto(){
    return this.registroForm.get("nombreCompleto");
  }

  get usuario(){
    return this.registroForm.get("usuario");
  }

  get email(){
    return this.registroForm.get("email");
  }

  get contrasenia(){
    return this.registroForm.get("contrasenia");
  }

  get confirmContrasenia(){
    return this.registroForm.get("confirmContrasenia");
  }

  // get f() { return this.registroForm.controls; }
  // Boton que crea el user
  onSubmit() {
    if(this.registroForm.invalid){
      this.registroForm.markAllAsTouched();
    } else {
      const formCompleto = this.registroForm.value
      delete formCompleto.confirmContrasenia
      const nuevoUser: UserDTO = {
        nombreCompleto: formCompleto.nombreCompleto as string,
        email: formCompleto.email as string,
        usuario: formCompleto.usuario as string,
        password: formCompleto.contrasenia as string
      }

      this.userService.crearUser(nuevoUser)
      .subscribe({
        next: () => {
          alert("El usuario fue creado correctamente")
          this.router.navigate(["/login"])
        },
        error: (err) => {
          if (err.status === 409) {
            alert('El correo electrónico ya está en uso. Por favor, utilice otro.');
          } else {
            console.error("Error during registration:", err);
            // Handle other errors appropriately
          }
        }
      })
    }
  }


}
