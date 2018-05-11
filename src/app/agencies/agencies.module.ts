import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AgencyComponent } from './agency/agency.component';
import { AgencyService } from './agency.service';
import { HomeComponent } from './home/home.component'

//pipes
import { BoolTransform, AgencyTypeTransform } from '../util/agencypipes.pipe';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
  ],
  declarations: [AgencyComponent, BoolTransform, AgencyTypeTransform, HomeComponent],
  exports: [AgencyComponent],
  providers:[AgencyService]
})
export class AgenciesModule { }
