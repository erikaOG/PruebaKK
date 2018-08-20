import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVehiculoClienteComponent } from './consultar-vehiculo-cliente.component';

describe('ConsultarVehiculoClienteComponent', () => {
  let component: ConsultarVehiculoClienteComponent;
  let fixture: ComponentFixture<ConsultarVehiculoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarVehiculoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarVehiculoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
