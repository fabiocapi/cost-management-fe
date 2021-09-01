import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';

const routes: Routes = [
  {path:'',redirectTo: 'cliente',pathMatch:'full'},
  {path:'clienti',component:ClienteListComponent},
  {path:'clienteAdd',component:ClienteAddComponent},
  {path:'clienteUpdate/:partitaIva',component:ClienteUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
