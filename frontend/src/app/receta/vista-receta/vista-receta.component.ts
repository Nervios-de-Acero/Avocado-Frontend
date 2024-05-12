import { Component, Input, signal, inject} from '@angular/core';
import { Receta } from '../../model/receta.model';
import { RecetaService } from '../../services/receta.service';

@Component({
  selector: 'app-vista-receta',
  standalone: true,
  imports: [],
  templateUrl: './vista-receta.component.html',
  styleUrl: './vista-receta.component.css'
})
export class VistaRecetaComponent {

  @Input() id?: number;
  recetaDetail = signal<Receta | null>(null);

  private recetaService = inject(RecetaService);

  constructor(){}

  ngOnInit(){
    if(this.id){
      this.recetaService.getOne(this.id)
      .subscribe({
        next: (data) => {
          console.log("Que data llega")
          console.log(data)
          console.log(data.content[0])
          // Lo asignamos a nuestra señal.
          this.recetaDetail.set(data.content[0]);
        }
      })
    }
  }

}
