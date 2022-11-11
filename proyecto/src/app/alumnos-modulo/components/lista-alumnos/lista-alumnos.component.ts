import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos$!: Observable<Alumno[]>
  constructor(

    private alumnosService: AlumnosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.alumnos$ = this.alumnosService.obtenerAlumnos();
  }
  eliminarAlumno(id: number) {
    this.alumnosService.eliminarAlumno(id).subscribe(
      () => {
        this.alumnos$ = this.alumnosService.obtenerAlumnos();
      }
    );
    
  }

  editarAlumno(id: number) {
    this.router.navigate(['alumno/editar', id]);
  }

  agregarAlumno(nuevo : string) {
    this.router.navigate(['alumno/agregar', nuevo]);
  }
}
