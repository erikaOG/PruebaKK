import { InformacionServicioClienteModule } from './informacion-servicio-cliente.module';

describe('InformacionServicioClienteModule', () => {
  let informacionServicioClienteModule: InformacionServicioClienteModule;

  beforeEach(() => {
    informacionServicioClienteModule = new InformacionServicioClienteModule();
  });

  it('should create an instance', () => {
    expect(informacionServicioClienteModule).toBeTruthy();
  });
});
