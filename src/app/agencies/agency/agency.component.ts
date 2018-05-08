import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';
import { Agency } from '../agency.model';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
})
export class AgencyComponent implements OnInit {

  public agencies: Agency[]

  constructor(private servico : AgencyService) { }

  ngOnInit() {
   this.servico.getAllAgencies()
   .then( (minhasAgencias:any) =>{
      console.log(minhasAgencias.agencies)
      this.agencies = minhasAgencias
   } )
  }


  public buscar(nameAgency: string ){
    this.servico.getAgenciesByName(nameAgency)
      .subscribe((Agencias : Agency[]) => {
        this.agencies = Agencias
      } )

  }
}
