import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from 'src/app/models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
 private urlApi = 'https://6362c37466f75177ea37a715.mockapi.io/curso';
  constructor(
    private http: HttpClient,
  ) {
    
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.urlApi);
  }

  obtenerCurso(id: number)  {
    
  }

  agregarCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(this.urlApi, curso);
  }

  editarCurso(curso: Curso): Observable<Curso>{
    this.urlApi = (`${this.urlApi}/${curso.id}`);
    return this.http.put<Curso>(this.urlApi, curso);
  }

  eliminarCurso(id: number): Observable<{}>{
    this.urlApi = (`${this.urlApi}/${id}`);
    return this.http.delete(this.urlApi);
  } 
}
