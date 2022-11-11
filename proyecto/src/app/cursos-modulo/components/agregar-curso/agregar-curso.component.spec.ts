import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarCursoComponent } from './agregar-curso.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Pruebas unitarias de AgregarCursoComponent', () => {
  let component: AgregarCursoComponent;
  let fixture: ComponentFixture<AgregarCursoComponent>;


  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ AgregarCursoComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule, 
        HttpClientTestingModule
      ]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('se crea el componente', () => {
    expect(component).toBeTruthy();
  });



});
