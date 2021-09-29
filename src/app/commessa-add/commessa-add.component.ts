import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commessa } from '../commessa';
import { CommessaService } from '../commessa.service';

@Component({
  selector: 'app-commessa-add',
  templateUrl: './commessa-add.component.html',
  styleUrls: ['./commessa-add.component.css']
})
export class CommessaAddComponent implements OnInit {

  commessa : Commessa = new Commessa();

  tipologia_commessa: Array<string> = ["Time Material", "Produzione"];

  selected = 'Time Material';
  constructor(private commessaService: CommessaService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.commessa.tipologiaCommessa = this.selected;
    this.commessaService.
      addCommessa(this.commessa).toPromise()
      .then(x => this.goToList(), error => console.log(error));
  }

  //TODO
  goToList(){
    //this.router.navigate(['listaCommesse']);
  }

}
