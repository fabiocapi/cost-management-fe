import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Azienda } from './azienda';
import {from}   from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AziendaService {

  constructor(private http: HttpClient) { }
  private aziendeUrl = 'http://localhost:8080/api/aziende';





  findAllAziende():Observable<any>{

    return this.http.get(`${this.aziendeUrl}`);
  }

  findAziendaById (id : string): Observable<any> {
      console.log()
    return this.http.get(`${this.aziendeUrl}/{id}`);

  }
}
