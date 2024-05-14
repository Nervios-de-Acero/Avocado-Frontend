import { Component, inject, signal } from '@angular/core';
import { CardSuscribirseComponent } from "../card-suscribirse/card-suscribirse.component";
import { Suscripcion } from '../../model/suscripcion.model';
import { SuscripcionService } from '../../services/suscripcion.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-suscribirse',
    standalone: true,
    templateUrl: './suscribirse.component.html',
    styleUrl: './suscribirse.component.css',
    imports: [CardSuscribirseComponent, RouterModule]
})
export class SuscribirseComponent {

  suscripciones = signal<Suscripcion[]>([]);

  private suscripcionService = inject(SuscripcionService);

  constructor() {}

  ngOnInit(){
    this.getSuscripciones()
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



}
