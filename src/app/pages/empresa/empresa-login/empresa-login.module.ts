import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaLoginRoutingModule } from './empresa-login-routing.module';
import { EmpresaLoginComponent } from './empresa-login.component';


@NgModule({
  declarations: [
    EmpresaLoginComponent
  ],
  imports: [
    CommonModule,
    EmpresaLoginRoutingModule
  ]
})
export class EmpresaLoginModule { }
