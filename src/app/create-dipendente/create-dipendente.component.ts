import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { Azienda } from '../azienda';
import { AziendaService } from '../azienda.service';
import { Dipendente } from '../dipendente';
import { DipendenteService } from '../dipendente.service';
import { map, filter, switchMap, take, concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-create-dipendente',
  templateUrl: './create-dipendente.component.html',
  styleUrls: ['./create-dipendente.component.css']
})

export class CreateDipendenteComponent implements OnInit {

  dipendente : Dipendente = new Dipendente();
  selectedeAziendaId: number =1;;
  defaultAziendaId :number=1;
  aziende: Observable<Azienda[]>;
  

  constructor(private dipendentiService: DipendenteService,private aziendaService: AziendaService, private router: Router) { 
    this.loadAziende();
  }
  

   async loadAziende() {
    await new Promise(f => setTimeout(f, 50));
    this.aziende = this.aziendaService.findAllAziende();
    //console.log("AZIENDE ARRAY OBSERVABLE : " +this.aziende);
  }

    /*
   this.aziendaService.findAllAziende().pipe(
      switchMap(values => from(values)),
      concatMap(value => of(value).pipe(delay(500)))
    );*/
  
  ngOnInit(): void {

      }

  changeClient(value: any){
    this.selectedeAziendaId = value;
   // console.log("AZIENDA SELEZIONATA DAL MENU A TENDINA: "+ this.selectedeAziendaId);
}

  onSubmit(){
    this.dipendentiService.
    addDipendente(this.dipendente,this.selectedeAziendaId).toPromise()
                              .then(x => this.goToList(), error =>console.log(error));
   }
  goToList(){
    this.router.navigate(['listaDipendenti']);
  } 
}
 
/*
function findAziendaById(this: any, id: string): Observable<Azienda>{
  return this.aziendaService.findAziendaById(id);
}*/

