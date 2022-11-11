import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clase } from 'src/app/models/clase';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-editar-clases',
  templateUrl: './editar-clases.component.html',
  styleUrls: ['./editar-clases.component.css']
})
export class EditarClasesComponent implements OnInit {
  formulario!: FormGroup;
  id!: number;
  constructor(
   
    private activatedRoute: ActivatedRoute,
    private claseService: ClasesService,
    private router: Router

  ) { 

    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.id = parseInt(parametros.get('id') || '0');
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        descripcion: new FormControl(parametros.get('descripcion'), [Validators.required]),
        
      });
    })

  }

  ngOnInit(): void {
  }
  editarClase() {
    let c: Clase = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      descripcion: this.formulario.value.descripcion,
    }

    this.claseService.editarClase(c);

    this.router.navigate(['clase'])
  }
}
