import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Agency } from './agency.model';

@Injectable()
export class AgencyService {

  public apiURL = 'https://launchlibrary.net/1.4/agency'
  public agencies: Agency[]

  constructor(private http: Http) { }

  public getAgencies():Promise<Agency[]> {
    return this.http.get(this.apiURL)
      .toPromise()
      .then(
        (resposta: any) => {
          console.log("resposta")
          console.log(resposta)
          console.log("resposta json")
          console.log(resposta.json())
          return resposta.json().agencias
      },
      (erro: any) => {
        console.log(erro);
        return new Promise<Agency[]>;
      }
    )
  }
}
