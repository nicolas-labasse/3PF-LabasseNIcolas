import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClasesComponent } from './components/lista-clases/lista-clases.component';
import { AgregarClasesComponent } from './components/agregar-clases/agregar-clases.component';
import { EditarClasesComponent } from './components/editar-clases/editar-clases.component';
import { SharedModule } from '../shared/shared.module';
import { ClaseRoutingModule } from './clase.routing.module';



@NgModule({
  declarations: [
    ListaClasesComponent,
    AgregarClasesComponent,
    EditarClasesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClaseRoutingModule
  ],
  exports: [
    ClaseRoutingModule,
    ListaClasesComponent,
    AgregarClasesComponent,
    EditarClasesComponent
  ]
})
export class ClasesModuloModule { }
