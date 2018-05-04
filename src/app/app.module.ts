import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavegationModule } from "./navegation/navegation.module";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavegationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
