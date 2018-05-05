import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';
import { Agency } from '../agency.model';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
})
export class AgencyComponent implements OnInit {

  private agencies: any

  constructor(private servico : AgencyService) { }

  ngOnInit() {
    this.agencies = this.servico.getAgencies()
  }
  public buscar(){
    console.log(this.agencies)

  }
}
