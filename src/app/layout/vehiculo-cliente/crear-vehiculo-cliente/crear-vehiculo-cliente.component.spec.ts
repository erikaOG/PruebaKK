import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVehiculoClienteComponent } from './crear-vehiculo-cliente.component';

describe('CrearVehiculoClienteComponent', () => {
  let component: CrearVehiculoClienteComponent;
  let fixture: ComponentFixture<CrearVehiculoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearVehiculoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVehiculoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
