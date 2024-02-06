import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common'
import { ProductoListaComponent } from './producto-lista/producto-lista.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ProductoListaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent{

}
