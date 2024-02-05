import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-item',
  standalone: true,
  imports: [],
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.css'
})
export class ProductoItemComponent implements OnInit{
  @Input() producto: Producto | undefined;

  ngOnInit(): void {
    console.log(this.producto)
  }
}
