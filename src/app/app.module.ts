import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { CandidatoComponent } from './pages/candidato/candidato.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { TopocadidatoComponent } from './components/templates/topocadidato/topocadidato.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CandidatoComponent,
    FooterComponent,
    TopocadidatoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
