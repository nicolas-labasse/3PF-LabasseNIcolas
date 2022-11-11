import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Alumno } from 'src/app/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private urlApi = 'https://6362c37466f75177ea37a715.mockapi.io/alumno';

  constructor(
    private http: HttpClient,

  ) {
    
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.urlApi);
  }

  obtenerAlumno(id: number){
    
  }

  agregarAlumno(alumno: Alumno){
    return this.http.post<Alumno>(this.urlApi, alumno);
  }

  editarAlumno(alumno: Alumno): Observable<Alumno>{
    this.urlApi = (`${this.urlApi}/${alumno.id}`);
    return this.http.put<Alumno>(this.urlApi, alumno);
  }

  eliminarAlumno(id: number): Observable<{}>{
    this.urlApi = (`${this.urlApi}/${id}`);
    return this.http.delete(this.urlApi);
  }


}
