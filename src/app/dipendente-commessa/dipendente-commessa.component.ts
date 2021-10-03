import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Commessa } from '../commessa';
import { CommessaService } from '../commessa.service';
import { Dipendente } from '../dipendente';
import { DipendenteCommessaService } from '../dipendente-commessa.service';
import { DipendenteService } from '../dipendente.service';
import { DipendenteCommessa} from '../dipendenteCommessa';
import { DipendenteCommessaPK } from '../dipendenteCommessaPK';


@Component({
  selector: 'app-dipendente-commessa',
  templateUrl: './dipendente-commessa.component.html',
  styleUrls: ['./dipendente-commessa.component.css']
})
export class DipendenteCommessaComponent implements OnInit {

   commessa:Commessa= new Commessa();
   dipendente:Dipendente  = new Dipendente();
   dipendenteCommessa: DipendenteCommessa;

   
 
   
   modelDipendente: Dipendente;
   modelCommessa: Commessa;
   commesse = new Observable<Commessa[]>();
   dipendenti = new Observable<Dipendente[]>();
   dipdendenteCommmessaId : DipendenteCommessaPK = new DipendenteCommessaPK();

   tipologiaCommessa : string;
   importo: number;
   tariffaGg: string;

  constructor(private commessaService: CommessaService,
            private dipendenteCommessaService: DipendenteCommessaService,
             private dipendenteService: DipendenteService, private router: Router) { }

  ngOnInit(): void {
    this.loadCommesse();
    this.loadDipendenti();
  }

  async loadCommesse(){
    await new Promise(f => setTimeout(f, 50));
    this.commesse = this.commessaService.findAllCommesse();
  }

  async loadDipendenti(){
    await new Promise(f => setTimeout(f, 50));
    this.dipendenti = this.dipendenteService.findAllDipendenti();
    //console.log("%%%%%% DIPENDENTI :" + this.dipendenti);
  }



  changeDescrCommessa(value: any) {
    this.commessa = value;
    console.log(this.commessa);
    this.tipologiaCommessa = this.commessa.tipologiaCommessa;
  }

  changeDipendente(value:any){
    this.dipendente = value;
    //console.log(this.dipendente);
  
  }

  onSubmit() {
    this.dipdendenteCommmessaId.codiceCommessa = this.commessa.codice;
    this.dipdendenteCommmessaId.dipendenteCodiceFiscale = this.dipendente.codiceFiscale;
    this.dipendenteCommessa.id = this.dipdendenteCommmessaId;

    //console.log(this.dipendenteCommessa.commessa.codice);
    //console.log(this.dipendenteCommessa.id);
    //this.dipendenteCommessa.id.codiceCommessa = this.dipendenteCommessa.commessa.codice;
    //this.dipendenteCommessa.id.dipendenteCodiceFiscale = this.dipendenteCommessa.dipendente.codiceFiscale;
    
    //this.dipendenteCommessaPKJ = dipendenteCommessaPK;
    //console.log(this.commessa.importo);
    //console.log(this.tariffaGg);
    //this.dipdendenteCommmessaId.codiceCommessa = this.modelCommessa.codice;
    //this.dipdendenteCommmessaId.dipendenteCodiceFiscale =this.modelDipendente.codiceFiscale;
    //console.log("DIPCOMPK CF :"+this.dipendenteCommessaPK.dipendenteCodiceFiscale);
    //console.log(this.dipendenteCommessa.dataInizioAttivita);
    console.log(this.dipendenteCommessa.id.dipendenteCodiceFiscale);
    console.log(this.dipendenteCommessa.id.codiceCommessa);
    

    this.dipendenteCommessa.dataInizioAttivita= new Date ("2001-02-02");
    this.dipendenteCommessa.dataFineAttivita= new Date("2004-03-03");
    this.dipendenteCommessa.id.dipendenteCodiceFiscale = "VNDGDU74B21L4856";
    this.dipendenteCommessa.id.codiceCommessa="romaF";
    console.log(this.dipendenteCommessa);
    //console.log(this.dipendenteCommessa);
    // this.commessa.tipologiaCommessa = this.selectedCommessa;
    //console.log("%%%%% COMMESSA FE :"+this.dipendenteCommessa.dataFineAttivita);
    this.dipendenteCommessaService.
    addDipendenteCommessa(this.dipendenteCommessa, this.commessa.importo).toPromise()
     .then(x => this.goToList(), error => console.log(error));

      // this.commessaService.
      // addCommessa(this.commessa, this.clienteSelectedPartitaIva).toPromise()
      // .then(x => this.goToList(), error => console.log(error));
  }

  goToList(){

  }

}
