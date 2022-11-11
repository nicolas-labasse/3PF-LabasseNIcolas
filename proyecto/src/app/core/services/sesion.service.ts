import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';

import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
 
  private urlApi = 'https://6362c37466f75177ea37a715.mockapi.io/usuario';
 
  private sesion?: Sesion
  constructor(
    private ruter: Router,
    private http: HttpClient,
  ) { 

  }

  login(_u: Usuario) {
    
    const usuarios = this.http.get<Usuario[]>(this.urlApi);
    usuarios.subscribe
    (
      (data) => {
        console.log(data);
        for (const user of data) {
          if (user.nombre === _u.nombre && user.password === _u.password) {
            if (user.admin === true) {
              this.sesion = {
                sesionAdmin: true
              };
            }
              
            console.log('usuario encontrado');
            this.ruter.navigate(['/curso']);
            break;
          }
          else {
            console.log('El usuario es incorrecto');
          }
        }
      }
    );
  }

  esAdmin(): boolean {
    if (this.sesion?.sesionAdmin) {
      return true;
    }
    else {
      return false;
    }
  }
        
}
