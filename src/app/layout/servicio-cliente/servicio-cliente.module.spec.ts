import { ServicioClienteModule } from './servicio-cliente.module';

describe('ServicioClienteModule', () => {
  let servicioClienteModule: ServicioClienteModule;

  beforeEach(() => {
    servicioClienteModule = new ServicioClienteModule();
  });

  it('should create an instance', () => {
    expect(servicioClienteModule).toBeTruthy();
  });
});
