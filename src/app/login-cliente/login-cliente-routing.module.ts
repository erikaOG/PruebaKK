import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Importar estas dos clases
import { Routes, RouterModule } from '@angular/router';
import { LoginClienteComponent } from './login-cliente.component';

//Crear la constante para dirijirnos a esta ruta
const routes: Routes = [
  {
      path: '',
      component: LoginClienteComponent
  }
];

//Configurar el ngModule sino no funciona
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginClienteRoutingModule { }
