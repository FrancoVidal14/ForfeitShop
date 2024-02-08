import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../../models/producto.model';
import { Subscription } from 'rxjs';
import { ProductoService } from '../../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit, OnDestroy{

  slug: string | undefined;
  producto: Producto | undefined;
  productoSub: Subscription | undefined;

  constructor(private route: ActivatedRoute, private productoService: ProductoService) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['id']
    this.productoSub = this.productoService.getProducto()
    .subscribe({
      next: (productos: Producto[]) => {
        this.producto = productos.filter(p => p.slug === this.slug)[0]
        console.log(this.producto)
      },
      error: (err: any) => {
        console.error('Error', err)
      }
    })
  }

  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }
}
