import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaLoginComponent } from './empresa-login.component';

const routes: Routes = [{ path: '', component: EmpresaLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaLoginRoutingModule { }
