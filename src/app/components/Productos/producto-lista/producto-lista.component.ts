import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductoItemComponent } from '../producto-item/producto-item.component';
import { Producto } from '../../../models/producto.model';
import { ProductoService } from '../../../services/producto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [ProductoItemComponent],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent implements OnInit, OnDestroy{
  
  producto: Producto[] = [];  
  productoSub: Subscription | undefined
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoSub = this.productoService.getProducto()
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

  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }
}
