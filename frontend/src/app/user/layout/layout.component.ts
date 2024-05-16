import { Component, signal, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Categoria } from '../../model/categoria.model';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLinkWithHref],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  categorias = signal<Categoria[]>([]);

  @Output() idCategoriaElegido = new EventEmitter<number>();

  private categoriaService = inject(CategoriaService);

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    this.getCategorias()
  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
    alert("Sesion cerrada")
  }



  private getCategorias() {
    this.categoriaService.getCategorias()
      .subscribe({
        next: (data) => {
          this.categorias.set(data.content);
        },
        error: (err) => {"Error:" + err}
      });
  }

}
