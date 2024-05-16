import { Component, signal, inject, Input, input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRecetaComponent } from '../../receta/card-receta/card-receta.component';
import { Receta } from '../../model/receta.model';
import { RecetaService } from '../../services/receta.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, CardRecetaComponent, RouterModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

  constructor(private authService: AuthService, private router: Router) { }
  recetasSignal = signal<Receta[]>([]);

  private recetaService = inject(RecetaService);
  @Input() categoriaId!: number;
  idCat!: number;

  ngOnInit(){
    if (!this.authService.isLoggedIn()) {
      // Si no está autenticado, redirigir a la página de inicio de sesión
      this.router.navigateByUrl('/login');
    }
    this.getRecetas()
  }



  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoriaId']?.currentValue !== undefined) {
      this.idCat = changes['categoriaId'].currentValue;
    }
  }

  private getRecetas() {
    this.recetaService.getRecetas(this.idCat)
      .subscribe({
        next: (data) => {
          console.log("Llega el idCat, " + this.idCat)
          this.recetasSignal.set(data.content);
        },
        error: (err) => {
          console.log("El error es:", err)
        },
      });
  }
}
