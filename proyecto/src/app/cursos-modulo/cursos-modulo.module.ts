import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';
import { SharedModule } from '../shared/shared.module';
import { CursoRoutingModule } from './curso.routing.module';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';




@NgModule({
  declarations: [
    CursoListaComponent,
    EditarCursoComponent,
    AgregarCursoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursoRoutingModule
  ],
  exports: [
    CursoListaComponent,
    CursoRoutingModule,
    EditarCursoComponent,
    AgregarCursoComponent,
  ]
})
export class CursosModuloModule { }
