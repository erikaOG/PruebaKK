import { VehiculoClienteModule } from './vehiculo-cliente.module';

describe('VehiculoClienteModule', () => {
  let vehiculoClienteModule: VehiculoClienteModule;

  beforeEach(() => {
    vehiculoClienteModule = new VehiculoClienteModule();
  });

  it('should create an instance', () => {
    expect(vehiculoClienteModule).toBeTruthy();
  });
});
