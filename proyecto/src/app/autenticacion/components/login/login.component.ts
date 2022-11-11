import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';

import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formulario: FormGroup;
  constructor(
    
    
    private router: Router,
    private sesionService: SesionService,
  ) { 
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

 login() {
    const usuario: Usuario = {
      nombre: this.formulario.value.nombre,
      password: this.formulario.value.password
    };

   this.sesionService.login(usuario);
 }


}
