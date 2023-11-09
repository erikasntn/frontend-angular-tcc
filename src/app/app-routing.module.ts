import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/candidato/candidato.module').then(
        (m) => m.CandidatoModule
      ),
  },
  { path: 'emperesa/login', loadChildren: () => import('./pages/empresa/empresa-login/empresa-login.module').then(m => m.EmpresaLoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
