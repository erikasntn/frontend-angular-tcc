import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoComponent } from './candidato.component';

const routes: Routes = [
  { path: '', component: CandidatoComponent },
  {
    path: 'candidato/login',
    loadChildren: () =>
      import('./candidato-login/candidato-login.module').then(
        (m) => m.CandidatoLoginModule
      ),
  },
  { path: 'candidato/cadastro', loadChildren: () => import('./candidato-cadastro/candidato-cadastro.module').then(m => m.CandidatoCadastroModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatoRoutingModule {}
