import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionVehiculoClienteComponent } from './informacion-vehiculo-cliente.component';

describe('InformacionVehiculoClienteComponent', () => {
  let component: InformacionVehiculoClienteComponent;
  let fixture: ComponentFixture<InformacionVehiculoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionVehiculoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionVehiculoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
