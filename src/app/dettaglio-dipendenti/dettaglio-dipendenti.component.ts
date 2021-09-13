import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Azienda } from '../azienda';
import { Dipendente } from '../dipendente';
import { DipendenteService } from '../dipendente.service';

@Component({
  selector: 'app-dettaglio-dipendenti',
  templateUrl: './dettaglio-dipendenti.component.html',
  styleUrls: ['./dettaglio-dipendenti.component.css']
})
export class DettaglioDipendentiComponent implements OnInit {

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
}
