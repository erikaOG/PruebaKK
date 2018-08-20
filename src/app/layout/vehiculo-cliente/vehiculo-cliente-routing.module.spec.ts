import { VehiculoClienteRoutingModule } from './vehiculo-cliente-routing.module';

describe('VehiculoClienteRoutingModule', () => {
  let vehiculoClienteRoutingModule: VehiculoClienteRoutingModule;

  beforeEach(() => {
    vehiculoClienteRoutingModule = new VehiculoClienteRoutingModule();
  });

  it('should create an instance', () => {
    expect(vehiculoClienteRoutingModule).toBeTruthy();
  });
});
