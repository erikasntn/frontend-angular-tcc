import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoCadastroComponent } from './candidato-cadastro.component';

const routes: Routes = [{ path: '', component: CandidatoCadastroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatoCadastroRoutingModule { }
