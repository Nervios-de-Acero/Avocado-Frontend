import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, UserDTO } from '../../model/user.model';
import { MyValidators } from '../../utils/validators';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})

export class RegistrarseComponent {

  registroForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private userService: UserService){
    this.registroForm = this.formBuilder.group({
      nombreCompleto: ['',[Validators.required, Validators.maxLength(50), Validators.minLength(6), Validators.pattern(/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]+$/)]],
      usuario: ['',[Validators.required, Validators.maxLength(20), Validators.minLength(4), Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+{}|:<>?]+$/)]],
      email: ['',[Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])[\w\W]{8,}$/)]],
      confirmContrasenia: ['', [Validators.required]]
    },{
      validators: MyValidators.validContrasenia
    }
  );
  }


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
    if(this.registroForm.valid){
      console.log(this.registroForm.value)
      // this.userService.crearUser(this.registroForm.value)
      // .subscribe({
      //   next:(response) => {
      //     console.log(response)
      //   }
      // })
    } else {
      this.registroForm.markAllAsTouched();
    }
  }


}
