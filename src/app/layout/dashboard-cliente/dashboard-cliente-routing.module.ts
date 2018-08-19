import { NgModule } from '@angular/core';
//Importar estas dos clases
import { Routes, RouterModule } from '@angular/router';
import { DashboardClienteComponent } from './dashboard-cliente.component';

//Crear la constante para dirijirnos a esta ruta
const routes: Routes = [
  {
      path: '',
      component: DashboardClienteComponent
  }
];

//Configurar el ngModule sino no funciona
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardClienteRoutingModule { }
