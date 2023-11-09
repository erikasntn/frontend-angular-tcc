import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoLoginComponent } from './candidato-login.component';

const routes: Routes = [{ path: '', component: CandidatoLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatoLoginRoutingModule { }
