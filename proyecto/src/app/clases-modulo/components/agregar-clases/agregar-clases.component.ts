import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Clase } from 'src/app/models/clase';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-agregar-clases',
  templateUrl: './agregar-clases.component.html',
  styleUrls: ['./agregar-clases.component.css']
})
export class AgregarClasesComponent implements OnInit {
  formulario: FormGroup;
  constructor(

    private clasesService: ClasesService,
    private router: Router,

  ) {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl(),
    });

   }

  ngOnInit(): void {
  }

  agregarClase(){
    const clase: Clase = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      descripcion: this.formulario.value.descripcion,
    };

    this.clasesService.agregarClase(clase);
    this.router.navigate(['clase']);
  }

}
