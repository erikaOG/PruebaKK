import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginClienteComponent } from './login-cliente.component';
import { LoginClienteRoutingModule } from './/login-cliente-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginClienteRoutingModule,
    FormsModule
  ],
  declarations: [LoginClienteComponent]
})
export class LoginClienteModule { }
