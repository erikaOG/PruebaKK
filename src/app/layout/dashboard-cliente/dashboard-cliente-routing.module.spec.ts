import { DashboardClienteRoutingModule } from './dashboard-cliente-routing.module';

describe('DashboardClienteRoutingModule', () => {
  let dashboardClienteRoutingModule: DashboardClienteRoutingModule;

  beforeEach(() => {
    dashboardClienteRoutingModule = new DashboardClienteRoutingModule();
  });

  it('should create an instance', () => {
    expect(dashboardClienteRoutingModule).toBeTruthy();
  });
});
