import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, UserDTO } from '../../model/user.model';

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
      nombreCompleto: ['',[Validators.required, Validators.maxLength(50), Validators.minLength(5), Validators.pattern(/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]+$/)]],
      usuario: ['',[Validators.required, Validators.maxLength(20), Validators.minLength(6), Validators.pattern(/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]+$/)]],
      email: ['',[Validators.required, Validators.minLength(6), Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)$/)]]
    });
  }

  ngOnInit(): void {

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

  // get f() { return this.registroForm.controls; }
  // Boton que crea el user
  onSubmit() {
    if(this.registroForm.valid){
      this.userService.crearUser(this.registroForm.value)
      .subscribe({
        next:(response) => {
          console.log(response)
        }
      })
    } else {
      this.registroForm.markAllAsTouched();
    }
  }


}
