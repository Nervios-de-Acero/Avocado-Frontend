import { Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { CardSuscribirseComponent } from "../card-suscribirse/card-suscribirse.component";
import { Suscripcion } from '../../model/suscripcion.model';
import { SuscripcionService } from '../../services/suscripcion.service';
import { RouterModule } from '@angular/router';

declare var paypal: any;

@Component({
  selector: 'app-suscribirse',
  standalone: true,
  templateUrl: './suscribirse.component.html',
  styleUrl: './suscribirse.component.css',
  imports: [CardSuscribirseComponent, RouterModule]
})
export class SuscribirseComponent{

  suscripciones = signal<Suscripcion[]>([]);;
  precioSeleccionado: any;

  private suscripcionService = inject(SuscripcionService);

  constructor() {}

  ngOnInit(){
    this.getSuscripciones();
  }

  private getSuscripciones() {
    this.suscripcionService.getSuscripciones()
      .subscribe({
        next: (data) => {
          this.suscripciones.set(data.content);
        },
        error: (err) => {"Error:" + err}
      });
  }

  seleccionarPrecio(precio: string) {
    this.precioSeleccionado = precio;
  }

  inicializarPayPalButton() {
    if (!this.precioSeleccionado) {
      alert("Por favor, selecciona una suscripción.");
      return;
    }

    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        // Aquí puedes definir la lógica para crear la orden
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: this.precioSeleccionado // Utilizamos el precio seleccionado
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        // Aquí puedes definir la lógica cuando el pago es aprobado
        return actions.order.capture().then((details: any) => {
          // Aquí puedes mostrar un mensaje de éxito
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      }
    }).render('#paypal-button-container');
  }
}
