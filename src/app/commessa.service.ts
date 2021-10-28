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

  addCommessa(commessa:Commessa, clienteRagioneSociale: string) : Observable<any> {
    console.log("@@@@ "+commessa.codice);
    console.log("##### "+commessa.descrizioneCommessa);
    console.log("$$$$$$ " +commessa.dataInizioCommessa);
    console.log(" %%%%%%% " +commessa.dataFineCommessa);
    console.log("&&&&& "+ commessa.tipologiaCommessa);
    //console.log("****** PIVA "+ commessa.cliente.partitaIva);
    //console.log("(((((( "+ commessa.cliente.ragioneSociale);
    return this.http.post(`${this.commesseUrl}/${clienteRagioneSociale}`,commessa);
  }

  findAllCommesse():Observable<any>{
    return this.http.get(`${this.commesseUrl}`);
  }


}
