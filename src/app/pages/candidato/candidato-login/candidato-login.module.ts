import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatoLoginRoutingModule } from './candidato-login-routing.module';
import { CandidatoLoginComponent } from './candidato-login.component';
import { HeaderComponent } from 'src/app/components/templates/header/header.component';
import { HeaderAlternativoComponent } from 'src/app/components/templates/header/header-alternativo/header-alternativo.component';


@NgModule({
  declarations: [
    CandidatoLoginComponent,
    HeaderAlternativoComponent
  ],
  imports: [
    CommonModule,
    CandidatoLoginRoutingModule
  ]
})
export class CandidatoLoginModule { }
