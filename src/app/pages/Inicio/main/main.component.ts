import { Component } from '@angular/core';
import { BentoGridComponent } from './bentoGrid/bento-grid.component'
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { SliderInicioComponent } from './sliderInicio/slider-inicio.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BentoGridComponent, CaracteristicasComponent, SliderInicioComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

}
