import { Component, Input } from '@angular/core';
import { Suscripcion } from '../../model/suscripcion.model';

@Component({
  selector: 'app-card-suscribirse',
  standalone: true,
  imports: [],
  templateUrl: './card-suscribirse.component.html',
  styleUrl: './card-suscribirse.component.css'
})
export class CardSuscribirseComponent {

  @Input({required: true}) suscripcion!: Suscripcion;

}
