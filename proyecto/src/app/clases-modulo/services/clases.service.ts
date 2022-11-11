import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Clase } from 'src/app/models/clase';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {
  private clases: Clase[] = [
    {
      id: 1,
      nombre: 'Angular',
      descripcion: 'es una clase de angular'
    },
    {
      id: 2,
      nombre: 'Python',
      descripcion: 'es una clase de python'
    },
    {
      id: 3,
      nombre: 'ReactJS',
      descripcion: 'es una clase de react'
    },
    {
      id: 4,
      nombre: 'VueJS',
      descripcion: 'es una clase de vue'
    }
  ];
  private claseSubect: BehaviorSubject<Clase[]>;

  constructor() {
    this.claseSubect = new BehaviorSubject<Clase[]>(this.clases);
  }

  obtenerClases(): Observable<Clase[]>{
    return this.claseSubect.asObservable();
  }

  obtenerClase(id: number): Observable<Clase[]>{
    return this.obtenerClases().pipe(
      map((clases: Clase[]) => clases.filter((clase: Clase) => clase.id === id))
    )
  }

  agregarClase(Clase: Clase){
    this.clases.push(Clase);
    this.claseSubect.next(this.clases);
  }

  editarClase(Clase: Clase){
    let indice = this.clases.findIndex((c: Clase) => c.id === Clase.id);

    if(indice > -1){
      this.clases[indice] = Clase;
    }

    this.claseSubect.next(this.clases);
  }

  eliminarClase(id: number){
    let indice = this.clases.findIndex((c: Clase) => c.id === id);

    if(indice > -1){
      this.clases.splice(indice, 1);
    }

    this.claseSubect.next(this.clases);
  }
}
