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
  private success: boolean 

  constructor(private servico : AgencyService) { 
    this.agencies = []
    this.success = true 
  }

  ngOnInit() {
   this.servico.getAllAgencies()
   .then( (minhasAgencias:any) =>{
      this.agencies = minhasAgencias
      this.success = true
   } )
   .catch( (e) =>{
      this.agencies = []
      this.success = false
   })
  }

  public buscar(nameAgency: string ){
    this.servico.getAgenciesByName(nameAgency)
      .subscribe((Agencias : Agency[]) => {
        this.agencies = Agencias
        this.success = true
      },
      (erro) => {
        this.agencies = []
        this.success = false
       } )

  }
}
