import { TestBed, inject } from '@angular/core/testing';

import { VehiculoClienteService } from './vehiculo-cliente.service';

describe('VehiculoClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculoClienteService]
    });
  });

  it('should be created', inject([VehiculoClienteService], (service: VehiculoClienteService) => {
    expect(service).toBeTruthy();
  }));
});
