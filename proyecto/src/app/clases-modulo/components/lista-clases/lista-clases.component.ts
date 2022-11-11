import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Clase } from 'src/app/models/clase';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.component.html',
  styleUrls: ['./lista-clases.component.css']
})
export class ListaClasesComponent implements OnInit {
  clases$!: Observable<Clase[]>
  constructor(

    private clasesService: ClasesService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.clases$ = this.clasesService.obtenerClases();
  }
  eliminarClase(id: number) {
    this.clasesService.eliminarClase(id);
  }

  editarClase(id: number) {
    this.router.navigate(['clase/editar', id]);
  }

  agregarClase(nuevo : string) {
    this.router.navigate(['clase/agregar', nuevo]);
  }
}
