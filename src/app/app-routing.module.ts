import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { CommessaListComponent} from './commessa-list/commessa-list.component';
import { CommessaAddComponent } from './commessa-add/commessa-add.component';
import { CommessaUpdateComponent } from './commessa-update/commessa-update.component';

const routes: Routes = [
  {path:'',redirectTo: 'cliente',pathMatch:'full'},
  {path:'clienti',component:ClienteListComponent},
  {path:'clienti/clienteAdd',component:ClienteAddComponent},
  {path:'clienti/clienteUpdate/:partitaIva',component:ClienteUpdateComponent},
  {path:'commesse',component:CommessaListComponent},
  {path:'commesse/commessaAdd',component:CommessaAddComponent},
  {path:'commesse/clienteUpdate/:id',component:CommessaUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
