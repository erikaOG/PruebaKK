import { DashboardClienteModule } from './dashboard-cliente.module';

describe('DashboardClienteModule', () => {
  let dashboardClienteModule: DashboardClienteModule;

  beforeEach(() => {
    dashboardClienteModule = new DashboardClienteModule();
  });

  it('should create an instance', () => {
    expect(dashboardClienteModule).toBeTruthy();
  });
});
