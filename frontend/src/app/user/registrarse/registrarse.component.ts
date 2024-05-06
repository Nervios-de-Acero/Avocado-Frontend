import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, UserDTO } from '../../model/user.model';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})

export class RegistrarseComponent {

  registroForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private userService: UserService){
    this.registroForm = this.formBuilder.group({
      nombreCompleto: ['',[Validators.required, Validators.maxLength(50), Validators.minLength(5), Validators.pattern(/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]+$/)]],
      usuario: ['',[Validators.required, Validators.maxLength(20), Validators.minLength(6), Validators.pattern(/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]+$/)]],
      email: ['',[Validators.required, Validators.maxLength(50), Validators.minLength(6), Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      contraseña: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)$/)]]
    });
  }

  ngOnInit(): void {

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
