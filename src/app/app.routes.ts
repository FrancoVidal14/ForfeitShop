import { Routes } from '@angular/router';
import { InicioComponent } from './pages/Inicio/inicio.component';
import { ProductosComponent } from './components/Productos/productos.component';
import { ProductoComponent } from './components/Productos/producto/producto.component';
import { SignComponent } from './components/sign/sign.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'productos',
        component: ProductosComponent
    },
    {
        path:'productos/:id', 
        component: ProductoComponent
    },
    {
        path: 'login',
        component: SignComponent,
        // canActivate: [AuthGuard],
    }
];
