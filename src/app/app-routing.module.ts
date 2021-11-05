import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatiContrattualiComponent } from './dati-contrattuali/dati-contrattuali.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { TipologiacontrattoComponent } from './tipologiacontratto/tipologiacontratto.component';

const routes: Routes = [
  { path: "login" , component: LoginComponent},
  { path: "loginsuccess" , component: LoginsuccessComponent},
  { path: "registration" , component: RegistrationComponent},
  { path: "tipologia_contratto" , component: TipologiacontrattoComponent},
  { path: "dati_contrattuali" , component: DatiContrattualiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
