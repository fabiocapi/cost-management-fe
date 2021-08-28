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

  constructor(private dipendentiService: DipendenteService, route: Router) { }

  ngOnInit(): void {
  }
  
}
