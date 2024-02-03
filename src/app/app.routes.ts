import { Routes } from '@angular/router';
import { InicioComponent } from './pages/Inicio/inicio.component';
import { ProductosComponent } from './pages/Productos/productos.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'productos',
        component: ProductosComponent
    }
];
