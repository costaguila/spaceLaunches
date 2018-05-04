import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, NavbarComponent],
  declarations: [FooterComponent, NavbarComponent]
})
export class NavegationModule { }
