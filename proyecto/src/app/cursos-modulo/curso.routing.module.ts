import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarCursoComponent } from "./components/agregar-curso/agregar-curso.component";
import { CursoListaComponent } from "./components/curso-lista/curso-lista.component";
import { EditarCursoComponent } from "./components/editar-curso/editar-curso.component";


    const routes: Routes = [
        { path: 'curso', component: CursoListaComponent}
        , { path: 'curso/editar/:id', component: EditarCursoComponent}
        , { path: 'curso/agregar/:nuevo', component: AgregarCursoComponent}
        
            
    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CursoRoutingModule { }
