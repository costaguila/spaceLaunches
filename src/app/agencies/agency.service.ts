import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Agency } from './agency.model';


@Injectable()
export class AgencyService {

  public apiURL = 'https://launchlibrary.net/1.4/agency'
  public agencies: Agency[]

  constructor(private http: Http) { }

  public getAllAgencies():Promise<Agency[]> {
    return this.http.get(this.apiURL)
      .toPromise()
      .then(
        (resposta: any) => {
          return resposta.json().agencies.sort(this.comparar)
      },
      (erro: any) => {
        console.log(erro);
        return erro;
      }
    )
  }

   public getAgenciesByName(name: string):Observable<Agency[]> {
    return this.http
      .get(`${this.apiURL}?name=${name}`)
        .map( (resposta: Response) => {
          return resposta.json().agencies.sort(this.comparar)
        })
  }

  private comparar (a, b) {
  //Sorts Agencies by name
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
     } else if (nameA < nameB) {
        comparison = -1;
    }
        return comparison;
  }

}
