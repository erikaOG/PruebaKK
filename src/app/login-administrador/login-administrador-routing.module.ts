import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdministradorComponent } from './login-administrador.component';

const routes: Routes = [
  {
      path: '',
      component: LoginAdministradorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAdministradorRoutingModule { }
