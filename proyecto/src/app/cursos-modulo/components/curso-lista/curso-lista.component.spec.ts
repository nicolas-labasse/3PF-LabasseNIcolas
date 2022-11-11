import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoListaComponent } from './curso-lista.component';

describe('Pruebas unitarias de CursoListaComponent', () => {
  let component: CursoListaComponent;
  let fixture: ComponentFixture<CursoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('se crea el componente', () => {
    expect(component).toBeTruthy();
  });
});
