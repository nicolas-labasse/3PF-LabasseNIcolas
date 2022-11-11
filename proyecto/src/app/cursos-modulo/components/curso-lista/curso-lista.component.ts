import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {
  cursos$!: Observable<Curso[]>

  constructor(
    private cursosService: CursosService,
    private router: Router
    
  ) { }
    

  ngOnInit(): void {
   this.cursos$ = this.cursosService.obtenerCursos();
  }

  eliminarCurso(id: number): void{
    this.cursosService.eliminarCurso(id).subscribe(
      () => {
        this.cursos$ = this.cursosService.obtenerCursos();
      }
    );
    
  }

  editarCurso(id: number) {
    this.router.navigate(['curso/editar', id]);
  }

  agregarCurso(nuevo : string) {
    this.router.navigate(['curso/agregar', nuevo]);
  }

}
