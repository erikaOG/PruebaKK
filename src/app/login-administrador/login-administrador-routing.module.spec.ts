import { LoginAdministradorRoutingModule } from './login-administrador-routing.module';

describe('LoginAdministradorRoutingModule', () => {
  let loginAdministradorRoutingModule: LoginAdministradorRoutingModule;

  beforeEach(() => {
    loginAdministradorRoutingModule = new LoginAdministradorRoutingModule();
  });

  it('should create an instance', () => {
    expect(loginAdministradorRoutingModule).toBeTruthy();
  });
});
