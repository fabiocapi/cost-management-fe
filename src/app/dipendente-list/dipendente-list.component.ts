import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dipendente } from '../dipendente';
import { DipendenteService } from '../dipendente.service';

@Component({
  selector: 'app-dipendente-list',
  templateUrl: './dipendente-list.component.html',
  styleUrls: ['./dipendente-list.component.css']
})
export class DipendenteListComponent implements OnInit {

  dipendenti: Observable<Dipendente[]>;

  constructor(private dipendenteService: DipendenteService, private route: Router) {
    this.loadDipendenti();
  }

  ngOnInit(): void {
  }

  async loadDipendenti() {
    await new Promise(f => setTimeout(f, 50));
    this.dipendenti = this.dipendenteService.findAllDipendenti();

  }
}
