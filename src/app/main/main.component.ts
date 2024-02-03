import { Component } from '@angular/core';
import { BentoGridComponent } from './bentoGrid/bento-grid.component'
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BentoGridComponent, CaracteristicasComponent, InicioComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

}
