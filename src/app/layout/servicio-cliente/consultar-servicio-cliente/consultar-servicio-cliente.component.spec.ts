import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarServicioClienteComponent } from './consultar-servicio-cliente.component';

describe('ConsultarServicioClienteComponent', () => {
  let component: ConsultarServicioClienteComponent;
  let fixture: ComponentFixture<ConsultarServicioClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarServicioClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarServicioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
