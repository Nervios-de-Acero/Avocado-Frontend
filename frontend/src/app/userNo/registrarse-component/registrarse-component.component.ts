import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrarse-component',
  standalone: true,
  imports: [],
  templateUrl: './registrarse-component.component.html',
  styleUrl: './registrarse-component.component.css'
})
export class RegistrarseComponentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  /* registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registroForm.controls; }

  onSubmit() {
    console.log(this.registroForm.value);
  } */
}
