import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AgencyComponent } from './agency/agency.component';
import { AgencyService } from './agency.service';

//pipes
import { BoolTransform, AgencyTypeTransform } from '../util/agencypipes.pipe'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [AgencyComponent, BoolTransform, AgencyTypeTransform],
  exports: [AgencyComponent],
  providers:[AgencyService]
})
export class AgenciesModule { }
