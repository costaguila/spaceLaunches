import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyComponent } from './agency/agency.component';
import { AgencyService } from './agency.service';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [AgencyComponent],
  exports: [AgencyComponent],
  providers:[AgencyService]
})
export class AgenciesModule { }
