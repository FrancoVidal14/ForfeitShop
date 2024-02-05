import { Component, OnInit } from '@angular/core';
import { ProductoItemComponent } from '../producto-item/producto-item.component';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [ProductoItemComponent],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent implements OnInit{
  
  producto: Producto[] = [];  

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProducto()
      .subscribe({ 
        next: (producto: Producto[]) => {
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
