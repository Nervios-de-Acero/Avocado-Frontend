import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, UserDTO } from '../../model/user.model';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {


  // registroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  )
  { }

  // ngOnInit(): void {
  //   this.registroForm = this.formBuilder.group({
  //     nombreCompleto: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     contraseña: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  // }

  // get f() { return this.registroForm.controls; }

  // onSubmit() {
  //   console.log(this.registroForm.value);
  // }

  createUser(){
    
    this.userService.create();
  }

}
