import { ServicioClienteRoutingModule } from './servicio-cliente-routing.module';

describe('ServicioClienteRoutingModule', () => {
  let servicioClienteRoutingModule: ServicioClienteRoutingModule;

  beforeEach(() => {
    servicioClienteRoutingModule = new ServicioClienteRoutingModule();
  });

  it('should create an instance', () => {
    expect(servicioClienteRoutingModule).toBeTruthy();
  });
});
