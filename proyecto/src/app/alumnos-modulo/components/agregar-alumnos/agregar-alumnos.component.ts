import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-agregar-alumnos',
  templateUrl: './agregar-alumnos.component.html',
  styleUrls: ['./agregar-alumnos.component.css']
})
export class AgregarAlumnosComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private alumnosService: AlumnosService,
    private router: Router,
  ) {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });

   }

  ngOnInit(): void {
  }
  agregarAlumno(){
    const alumno: Alumno = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      edad: this.formulario.value.edad,
      email: this.formulario.value.email,
    };

    this.alumnosService.agregarAlumno(alumno).subscribe();
    this.router.navigate(['alumno']);
  }
}
