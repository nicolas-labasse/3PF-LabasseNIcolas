import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { AgregarAlumnosComponent } from './components/agregar-alumnos/agregar-alumnos.component';
import { SharedModule } from '../shared/shared.module';
import { AlumnosRoutingModule } from './alumnos.routing.module';



@NgModule({
  declarations: [
    ListaAlumnosComponent,
    EditarAlumnosComponent,
    AgregarAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosRoutingModule
  ],
  exports: [
    AlumnosRoutingModule,
    ListaAlumnosComponent,
    EditarAlumnosComponent,
    AgregarAlumnosComponent
  ]
})
export class AlumnosModuloModule { }
