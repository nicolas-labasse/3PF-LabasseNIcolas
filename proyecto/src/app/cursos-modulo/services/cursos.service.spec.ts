import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CursosService } from './cursos.service';
import { of } from 'rxjs';

describe('CursosService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: CursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CursosService(httpClientSpy as any);
  });

  it('El servicio se instancia correctamente', () => {
    expect(service).toBeTruthy();
  });
  it('El servicio retorna un arreglo de usuarios mockeados', (done: DoneFn) => {
    const cursos = [
      {  
      nombre: "Sammamish",
      profesor: 'Delpha',
      imagen: 'http://loremflickr.com/640/480/city',
      comision: 'TZ',
      fechaInicio: '2022-11-09T16:47:18.449Z',
      fechaFin: '2023-05-19T16:05:09.666Z',
      inscripcionAbierta: true,
      id: 2
      },
      {
      nombre: 'Champaign',
      profesor: 'Gudrun',
      imagen: 'http://loremflickr.com/640/480/city',
      comision: 'TM',
      fechaInicio:'2022-11-09T16:33:00.774Z',
      fechaFin:'2023-11-03T16:48:44.125Z',
      inscripcionAbierta: false,
      id: 4
    }
    ];

    httpClientSpy.get.and.returnValue(of(cursos));

    service.obtenerCursos().subscribe((cursos) => {
      expect(cursos).toEqual(cursos);
      done();
    })
  })
});
