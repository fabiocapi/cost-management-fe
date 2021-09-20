import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commessa } from './commessa';

@Injectable({
  providedIn: 'root'
})
export class CommessaService {

  constructor(private http:HttpClient) { }

  private commesseUrl = 'http://localhost:8080/api/commesse';

  addCommessa(commessa:Commessa) : Observable<any> {
    console.log("@@@@ "+commessa.codice);
    console.log("##### "+commessa.descrizioneCommessa);
    console.log("$$$$$$ " +commessa.dataInizioCommessa);
    console.log(" %%%%%%% " +commessa.dataFineCommessa);
    console.log("&&&&& "+ commessa.tipologiaCommessa);
    return this.http.post(`${this.commesseUrl}`,commessa);
  }


}
