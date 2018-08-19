import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdministradorComponent } from './login-administrador.component';
import { LoginAdministradorRoutingModule } from './/login-administrador-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginAdministradorRoutingModule,
    FormsModule
  ],
  declarations: [LoginAdministradorComponent]
})
export class LoginAdministradorModule { }
