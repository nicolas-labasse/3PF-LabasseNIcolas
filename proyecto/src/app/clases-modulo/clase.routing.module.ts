import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarClasesComponent } from "./components/agregar-clases/agregar-clases.component";
import { EditarClasesComponent } from "./components/editar-clases/editar-clases.component";
import { ListaClasesComponent } from "./components/lista-clases/lista-clases.component";

    const routes: Routes = [
        { path: '', component: ListaClasesComponent}
        , { path: 'clase/editar/:id', component: EditarClasesComponent}
        , { path: 'clase/agregar/:nuevo', component: AgregarClasesComponent}
      
        
    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ClaseRoutingModule { }