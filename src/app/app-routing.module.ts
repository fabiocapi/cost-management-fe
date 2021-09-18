import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { TipologiacontrattoComponent } from './tipologiacontratto/tipologiacontratto.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
//import { CreateDipendenteComponent } from './create-dipendente/create-dipendente.component';
//import { UpdateDipendenteComponent } from './update-dipendente/update-dipendente.component';
//import { DipendenteListComponent } from './dipendente-list/dipendente-list.component';

const routes: Routes = [
  { path: "login" , component: LoginComponent},
  { path: "loginsuccess" , component: LoginsuccessComponent},
  { path: "registration" , component: RegistrationComponent},
  { path: "tipologia_contratto" , component: TipologiacontrattoComponent},
  { path: "clienti", component: ClienteListComponent},
  { path: "clienti/add", component: ClienteAddComponent},
  { path: "clienti/update", component: ClienteUpdateComponent},
  { path: "registration" , component: RegistrationComponent},
  //{ path: "dipendenti" , component: DipendenteListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
