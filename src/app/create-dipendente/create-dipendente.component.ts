import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dipendente } from '../dipendente';
import { DipendenteService } from '../dipendente.service';

@Component({
  selector: 'app-create-dipendente',
  templateUrl: './create-dipendente.component.html',
  styleUrls: ['./create-dipendente.component.css']
})
export class CreateDipendenteComponent implements OnInit {

  dipendente :Dipendente = new Dipendente();

  constructor(private dipendentiService: DipendenteService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.dipendentiService.
    addDipendente(this.dipendente).
    subscribe(data => console.log(data))
    console.log(this.dipendente.codiceFiscale + "#################")
    console.log(this.dipendente.nome + "#################")
    this.goToList();
    
  }
  goToList(){
    this.router.navigate(['listaDipendenti']);
  }
  
}
