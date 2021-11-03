import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commessa } from '../commessa';
import { CommessaService } from '../commessa.service';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { from, Observable, of } from 'rxjs';
@Component({
  selector: 'app-commessa-add',
  templateUrl: './commessa-add.component.html',
  styleUrls: ['./commessa-add.component.css']
})
export class CommessaAddComponent implements OnInit {
  commessa : Commessa = new Commessa();
  selectedCliente:string;
  tipologia_commessa: Array<string> = ["Time Material", "Produzione"];
  clienti:  Observable<Cliente[]>;
  selected = 'Time Material';
  constructor(private commessaService: CommessaService,private clienteService: ClienteService,private router: Router) {
    this.loadClienti()
   }

  ngOnInit(): void {

  }

  onSubmit() {
    this.commessa.tipologiaCommessa = this.selected;
    console.info("partitaiva"+this.selectedCliente);
    this.commessaService.
      addCommessa(this.commessa).toPromise()
      .then(x => this.goToList(), error => console.log(error));
  }

  //TODO
  goToList(){
    //this.router.navigate(['listaCommesse']);
  }
  changeSelectedCliente(id:string){
    this.selectedCliente=id;
    console.info("partitaiva"+this.selectedCliente);
    this.clienteService.findClienteByPartitaIva(this.selectedCliente).toPromise().then(data => {
      this.commessa.cliente = data;
    }, error => console.log(error));
  }
  async loadClienti() {
    await new Promise(f => setTimeout(f, 50));
    this.clienti = this.clienteService.findAllClienti();
  }
}
