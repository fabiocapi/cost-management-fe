import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dipendente } from './dipendente';
import { Observable } from 'rxjs';
import { Azienda } from './azienda';


@Injectable({
  providedIn: 'root'
})
export class DipendenteService {

  constructor(private http: HttpClient) { }

  //baseURL
  private dipendentiUrl = 'http://localhost:8080/api/dipendenti';
  private aziendeUrl = 'http://localhost:8080/api/dipendenti';

  //async call to service in backend with Observable Object
  addDipendente(dipendente:Dipendente, id: number) : Observable<any> {
    return this.http.post(`${this.dipendentiUrl}/${id}`,dipendente);
  }

  
  findAllDipendenti(): Observable<any>{
    console.log("%%%%%% SERVICE FIND ALL DIPENDENTI CALLED");
    return this.http.get(`${this.dipendentiUrl}`);
  }

  updateDipendente(dipendente: Dipendente, id: string, aziendaId:number): Observable<Object> {

    console.log("INSIDE UPDATE DIPENDENTE METHOD SERVICE")
    return this.http.put(`${this.dipendentiUrl}/${id}/${aziendaId}`, dipendente);
  }

  removeDipendente(codiceFiscale: string):Observable<any> {

    return this.http.delete(`${this.dipendentiUrl}/${codiceFiscale}`, { responseType: 'text' });

  } 

  

  findDipendenteById(id: string): Observable<any> {
    return this.http.get(`${this.dipendentiUrl}/${id}`);

  }


  findAziendaById (id : string): Observable<any> {
    return this.http.get(`${this.aziendeUrl}/${id}`);
  }

  

  

 
}
