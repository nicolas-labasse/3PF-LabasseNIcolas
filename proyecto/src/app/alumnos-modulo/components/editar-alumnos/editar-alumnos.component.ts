import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-editar-alumnos',
  templateUrl: './editar-alumnos.component.html',
  styleUrls: ['./editar-alumnos.component.css']
})
export class EditarAlumnosComponent implements OnInit {
  formulario!: FormGroup;
  id!: number;
  constructor(

    private activatedRoute: ActivatedRoute,
    private alumnoService: AlumnosService,
    private router: Router

  ) { 

    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.id = parseInt(parametros.get('id') || '0');
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        apellido: new FormControl(parametros.get('apellido'), [Validators.required]),
        edad: new FormControl(parametros.get('edad'), [Validators.required]),
        email: new FormControl(parametros.get('email'), [Validators.required]),
      });
    })
  }

  ngOnInit(): void {
  }
  editarAlumno() {
    let a: Alumno = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      edad: this.formulario.value.edad,
      email: this.formulario.value.email,
    }

    this.alumnoService.editarAlumno(a).subscribe();

    this.router.navigate(['alumno'])
  }
}
