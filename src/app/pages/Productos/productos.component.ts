import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  
  producto: any;  

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProducto()
      .subscribe({ 
        next: (producto: any) => {
          this.producto = producto
          console.log(this.producto)
        },
        error: (err: any) => {
          console.error(err)
        },
        complete: () => {
          console.log('Completado')
        }
      })  
  }
}
