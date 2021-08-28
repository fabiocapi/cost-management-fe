import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dipendente } from './dipendente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DipendenteService {

  constructor(private http: HttpClient) { }

  //baseURL
  private dipendentiUrl = 'http://localhost:8080/api/dipendenti';

  //async call to service in backend with Observable Object
  addDipendente(dipendente:Dipendente) : Observable<Object> {

    return this.http.post(`${this.dipendentiUrl}`,dipendente);
  }

  
  findAllDipendenti(): Observable<any>{

    return this.http.get(`${this.dipendentiUrl}`);
  }
 
}
