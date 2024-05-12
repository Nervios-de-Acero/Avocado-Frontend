import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Receta } from '../../model/receta.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-receta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-receta.component.html',
  styleUrl: './card-receta.component.css'
})
export class CardRecetaComponent {
  @Input({required: true}) receta!: Receta;
}
