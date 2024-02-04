import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MainComponent, HeaderComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
