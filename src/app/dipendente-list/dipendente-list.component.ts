import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Azienda } from '../azienda';
import { Dipendente } from '../dipendente';
import { DipendenteService } from '../dipendente.service';

@Component({
  selector: 'app-dipendente-list',
  templateUrl: './dipendente-list.component.html',
  styleUrls: ['./dipendente-list.component.css']
})
export class DipendenteListComponent implements OnInit {

  dipendenti: Observable<Dipendente[]>;
  dipendente: Dipendente;
  aziendaId : string;

  constructor(private dipendenteService: DipendenteService, private router: Router) {
    this.loadDipendenti();
    //this.aziendaId = azienda.id;
  }

  ngOnInit(): void {

  }

  async loadDipendenti() {
    await new Promise(f => setTimeout(f, 50));
    this.dipendenti = this.dipendenteService.findAllDipendenti();
  }

  onUpdate(codiceFiscale: string, aziendaId: number,azienda: Azienda) {
  
    this.router.navigate(['updateDipendente', codiceFiscale, aziendaId]);
  }

  onDelete(codiceFiscale: string) {
  
    this.dipendenteService.removeDipendente(codiceFiscale).subscribe(
      data => {
        console.log(data);
        this.loadDipendenti();
      },
      error => console.log(error));
  }

  /*
  public CalculateAge(): void {
    console.log("DIPENDENTI IN CALCULATE AGE: "+ this.dipendenti);
       console.log("INSIDE CALCULATE AGE");
       console.log(this.dipendente.dataNascita +"DATANASCITAA");
         if(this.dataNascita){
          console.log(this.dataNascita + "DATA NASCITA BEFORE CONVERTING");
            var timeDiff = Math.abs(Date.now() - this.dataNascita);
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        }
  }*/
}
