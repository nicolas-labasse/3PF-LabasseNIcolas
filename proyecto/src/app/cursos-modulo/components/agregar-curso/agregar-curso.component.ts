import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  formulario: FormGroup;
  agregar: any;
  constructor(

    private cursoService: CursosService,
    private router: Router,
   

  ) { 
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      comision: new FormControl(),
      profesor: new FormControl(),
      inicio: new FormControl(),
      fin: new FormControl(),
      inscripcionAbierta: new FormControl()
    });
  }


  ngOnInit(): void {
  }
  agregarCurso(){
    const curso: Curso = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.inicio,
      fechaFin: this.formulario.value.fin,
      profesor: this.formulario.value.profesor,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    };

    this.cursoService.agregarCurso(curso).subscribe();
    this.router.navigate(['curso']);
  }
}
