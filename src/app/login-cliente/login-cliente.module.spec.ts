import { LoginClienteModule } from './login-cliente.module';

describe('LoginClienteModule', () => {
  let loginClienteModule: LoginClienteModule;

  beforeEach(() => {
    loginClienteModule = new LoginClienteModule();
  });

  it('should create an instance', () => {
    expect(loginClienteModule).toBeTruthy();
  });
});
