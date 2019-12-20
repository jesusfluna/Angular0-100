import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { PreciosComponent } from '../app/components/precios/precios.component';
import { ProtegidaComponent } from '../app/components/protegida/protegida.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "precios", component: PreciosComponent},
  {
    path: "protegida", 
    component: ProtegidaComponent,
    canActivate: [AuthGuard]
  },
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
