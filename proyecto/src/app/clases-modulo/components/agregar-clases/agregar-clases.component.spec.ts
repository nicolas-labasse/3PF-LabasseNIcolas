import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AgregarClasesComponent } from './agregar-clases.component';

describe('AgregarClasesComponent', () => {
  let component: AgregarClasesComponent;
  let fixture: ComponentFixture<AgregarClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarClasesComponent ],
      imports: [
        ReactiveFormsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('El formulario se mantiene invalido cuando ingreso unicamente la comision del curso', () => {
    const formulario = component.formulario;
    const comision = formulario.controls['descripcion'];

    comision.setValue('Es un texto para probar el test');

    expect(formulario.valid).toBeFalse();
  })

  it('El formulario se mantiene valido cuando ingreso el nombre del curso', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['nombre'];

    nombre.setValue('Es un texto para probar el test');

    expect(formulario.valid).toBeTrue();
  })

});
