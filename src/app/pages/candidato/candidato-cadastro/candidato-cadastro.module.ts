import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatoCadastroRoutingModule } from './candidato-cadastro-routing.module';
import { CandidatoCadastroComponent } from './candidato-cadastro.component';


@NgModule({
  declarations: [
    CandidatoCadastroComponent
  ],
  imports: [
    CommonModule,
    CandidatoCadastroRoutingModule
  ]
})
export class CandidatoCadastroModule { }
