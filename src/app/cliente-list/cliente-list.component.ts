import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-list',
    templateUrl: 'cliente-list.component.html',
    styleUrls: ['cliente-list.component.css']
})
export class ClienteListComponent implements OnInit{
  clienti: Observable<Cliente[]>;
  filter:string
  radio:string
  constructor(private clienteService: ClienteService, private router: Router) {
    this.reloadData();
  }
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.clienti = this.clienteService.findClienteFilter(this.filter,this.radio);
  }
  onUpdate(partitaIva: string) {
    this.router.navigate(['clienteUpdate', partitaIva]);
  }
  onDelete(partitaIva: string) {
    this.clienteService.removeCliente(partitaIva).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  onSubmit(){
    this.clienteService.findClienteFilter(this.filter,this.radio).toPromise().then(x => this.reloadData(), error => console.log(error));
  }
}
