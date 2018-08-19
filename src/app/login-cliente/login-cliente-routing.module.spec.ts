import { LoginClienteRoutingModule } from './login-cliente-routing.module';

describe('LoginClienteRoutingModule', () => {
  let loginClienteRoutingModule: LoginClienteRoutingModule;

  beforeEach(() => {
    loginClienteRoutingModule = new LoginClienteRoutingModule();
  });

  it('should create an instance', () => {
    expect(loginClienteRoutingModule).toBeTruthy();
  });
});
