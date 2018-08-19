import { LoginAdministradorModule } from './login-administrador.module';

describe('LoginAdministradorModule', () => {
  let loginAdministradorModule: LoginAdministradorModule;

  beforeEach(() => {
    loginAdministradorModule = new LoginAdministradorModule();
  });

  it('should create an instance', () => {
    expect(loginAdministradorModule).toBeTruthy();
  });
});
