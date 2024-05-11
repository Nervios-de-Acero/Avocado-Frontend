import { Component } from '@angular/core';
import { CardSuscribirseComponent } from "../card-suscribirse/card-suscribirse.component";

@Component({
    selector: 'app-suscribirse',
    standalone: true,
    templateUrl: './suscribirse.component.html',
    styleUrl: './suscribirse.component.css',
    imports: [CardSuscribirseComponent]
})
export class SuscribirseComponent {

}
