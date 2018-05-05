import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos da Aplicacao
import { NavegationModule } from "./navegation/navegation.module";
import { AgenciesModule } from "./agencies/agencies.module";
import { AgencyComponent } from "./agencies/agency/agency.component";
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: AgencyComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavegationModule,
    AgenciesModule,
    RouterModule.forRoot(
    appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
