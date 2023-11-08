import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatoRoutingModule } from './candidato-routing.module';
import { CandidatoComponent } from './candidato.component';
import { HeaderComponent } from 'src/app/components/templates/header/header.component';
import { TopocadidatoComponent } from 'src/app/components/templates/topocadidato/topocadidato.component';
import { FooterComponent } from 'src/app/components/templates/footer/footer.component';


@NgModule({
  declarations: [
    CandidatoComponent,
    HeaderComponent,
    TopocadidatoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule
  ]
})
export class CandidatoModule { }
