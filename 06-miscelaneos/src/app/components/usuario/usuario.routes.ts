import { Routes } from '@angular/router';
import { UsuarioDetallesComponent } from './usuario-detalles.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';

export const usuario_routes: Routes = [
    { path: 'nuevo', component: UsuarioNuevoComponent},
    { path: 'editar', component: UsuarioEditarComponent},
    { path: 'detalles', component: UsuarioDetallesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo'}
];
