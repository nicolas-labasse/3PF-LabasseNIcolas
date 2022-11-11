import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 {
  path: '', redirectTo: 'login', pathMatch: 'full'
 },
  {path: 'clase', loadChildren: () => import('./clases-modulo/clase.routing.module').then(m => m.ClaseRoutingModule)},
  {path: 'alumno', loadChildren: () => import('./alumnos-modulo/alumnos.routing.module').then(m => m.AlumnosRoutingModule)},
  
  {path: 'login', loadChildren: () => import('./autenticacion/autenticacion-routing.module').then(m => m.AutenticacionRoutingModule)},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
