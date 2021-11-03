import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commessa } from './commessa';

@Injectable({
  providedIn: 'root'
})
export class CommessaService {

  constructor(private http:HttpClient) { }

  private commessaUrl = 'http://localhost:8080/api/commesse';

  addCommessa(commessa:Commessa) : Observable<any> {
    return this.http.post(`${this.commessaUrl}`,commessa);
  }

  updateCommessa(commessa: Commessa, id: string): Observable<Object> {
    return this.http.put(`${this.commessaUrl}/${id}`, commessa);
  }
  removeCommessa(id: string): Observable<any> {
    return this.http.delete(`${this.commessaUrl}/${id}`, { responseType: 'text' });
  }
  findAllCommesse(): Observable<any> {
    return this.http.get(`${this.commessaUrl}`);
  }

  findCommessaByCodice(id:string): Observable<any> {
    return this.http.get(`${this.commessaUrl}/${id}`);
  }

  findCommessaFilter(filter:string,radio:string):  Observable<any>{
    console.info("called filter "+radio)
    switch ( radio ) {
       case "0":
          return this.http.get(`${this.commessaUrl}/codice/${filter}`);
       case "1":
          return this.http.get(`${this.commessaUrl}/dc/${filter}`);
       case "2":
          return this.http.get(`${this.commessaUrl}/tc/${filter}`);
       default:
          return this.http.get(`${this.commessaUrl}`);
        }
  }
}
