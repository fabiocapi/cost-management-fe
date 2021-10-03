import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commessa } from './commessa';
import { Dipendente } from './dipendente';
import { DipendenteCommessa} from './dipendenteCommessa';

@Injectable({
  providedIn: 'root'
})
export class DipendenteCommessaService {

  constructor(private http:HttpClient) { }

  //baseURL
  private dipendipendenteCommessaUrl = 'http://localhost:8080/api/dipendentecommessa';

  //async call to service in backend with Observable Object
  // addDipendenteCommessa(codiceFiscaleDipendente:string, commessaCodice: string, commessa:Commessa) : Observable<any> {
  //   return this.http.post(`${this.dipendipendenteCommessaUrl}/${codiceFiscaleDipendente}/${commessaCodice}`,commessa);
  // }

  addDipendenteCommessa(  dipendenteCommessa:DipendenteCommessa, importo:number) : Observable<any> {
    console.log("####### DIPENDENTECOMMESSA :"+ dipendenteCommessa);
    console.log("####### DIPENDENTECOMMESSA importo parameter :"+ importo);


    //console.log("^^^^^ DIPENDENTECOMEMMSSA CF :"+ commessa.codice);
    //console.log("@@@@@ DIPENDENTE CF "+ dipendenteCf);
    return this.http.post(`${this.dipendipendenteCommessaUrl}/${importo}`, dipendenteCommessa);
  }
}
