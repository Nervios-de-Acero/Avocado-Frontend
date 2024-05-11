import { Component, signal, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRecetaComponent } from '../../receta/card-receta/card-receta.component';
import { Receta } from '../../model/receta.model';
import { RecetaService } from '../../services/receta.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, CardRecetaComponent, RouterModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

  recetasSignal = signal<Receta[]>([]);

  private recetaService = inject(RecetaService);

  @Input() receta_id?: number;

  ngOnInit(){
    this.getRecetas()
  }

  private getRecetas() {
    this.recetaService.getRecetas(this.receta_id)
      .subscribe({
        next: (data) => {
          console.log(data.content)
          this.recetasSignal.set(data.content);
          console.log("Que traer recetas signal:")
          console.log(this.recetasSignal)
        },
        error: (err) => {
          console.log("El error es:", err)
        },
      });
  }
}
