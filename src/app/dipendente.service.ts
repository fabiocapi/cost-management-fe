import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DipendenteService {

  constructor(private http: HttpClient) { }

  //baseURL
  private dipendentiUrl = 'http://localhost:8080/api/dipendenti';


  addDipendente(dipendente:Dipendente){
    
  }

}
