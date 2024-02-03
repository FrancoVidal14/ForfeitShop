import { Component } from '@angular/core';
import { HeaderComponent } from '../Inicio/header/header.component';
import { FooterComponent } from '../Inicio/footer/footer.component';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
