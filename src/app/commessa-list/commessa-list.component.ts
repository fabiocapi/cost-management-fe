import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Commessa } from '../commessa';
import { CommessaService } from '../commessa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commessa-list',
  templateUrl: './commessa-list.component.html',
  styleUrls: ['./commessa-list.component.css']
})
export class CommessaListComponent implements OnInit {
  commesse: Observable<Commessa[]>;
  filter:string
  radio:string
  constructor(private commessaService: CommessaService, private router: Router) {
    this.reloadData();
  }

  ngOnInit(): void {

  }
  onUpdate(codice: string) {
    this.router.navigate(['commessaUpdate', codice]);
  }
  onDelete(codice: string) {
    this.commessaService.removeCommessa(codice).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  onSubmit(){
    this.commessaService.findCommessaFilter(this.filter,this.radio).toPromise().then(x => this.reloadData(), error => console.log(error));
  }
  reloadData() {
    this.commesse = this.commessaService.findCommessaFilter(this.filter,this.radio);
  }
}
