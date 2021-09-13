import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Azienda } from '../azienda';
import { AziendaService } from '../azienda.service';
import { Dipendente } from '../dipendente';
import { DipendenteService } from '../dipendente.service';

@Component({
  selector: 'app-create-dipendente',
  templateUrl: './create-dipendente.component.html',
  styleUrls: ['./create-dipendente.component.css']
})

export class CreateDipendenteComponent implements OnInit {

  dipendente: Dipendente = new Dipendente();
  selectedeAziendaId: number = 1;
  defaultAziendaId: number;
  aziende: Observable<Azienda[]>;
  aziendaFromProperties: Observable<Azienda>;
  aziendaById: Azienda;
  aziendaByNome: Azienda;


  constructor(private aziendaService: AziendaService, private dipendentiService: DipendenteService, private router: Router) {
    this.loadAziende();
  }

  async loadAziende() {
    await new Promise(f => setTimeout(f, 50));
    this.aziende = this.aziendaService.findAllAziende();
  }

  ngOnInit(): void {
    /* questo metodo non serve e' solo una prova per trovare una azienda dall id
    l azienda by id verra impelmentato nel back end nell' aziendaservice invece che fare tutto il giro dal frontend
    this.aziendaService.findAziendaById("1")
      .subscribe(data => {
        //console.log(data)
        this.aziendaById = data;
      }, error => console.log(error));
    */
    this.aziendaService.findAziendaByName()
      .subscribe(data => {
        //console.log(data)
        this.aziendaByNome = data;
        this.defaultAziendaId = data.id;
        this.selectedeAziendaId = data.id;
      }, error => console.log(error));

  }

  changeClient(value: any) {
    this.selectedeAziendaId = value;
  }

  onSubmit() {
    this.dipendentiService.
      addDipendente(this.dipendente, this.selectedeAziendaId).toPromise()
      .then(x => this.goToList(), error => console.log(error));
  }
  goToList() {
    this.router.navigate(['listaDipendenti']);
  }
}


