import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnosModuloModule } from './alumnos-modulo/alumnos-modulo.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClasesModuloModule } from './clases-modulo/clases-modulo.module';
import { CursosModuloModule } from './cursos-modulo/cursos-modulo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModuloModule,
    ClasesModuloModule,
    AlumnosModuloModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AutenticacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
