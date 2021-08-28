import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDipendenteComponent } from './create-dipendente/create-dipendente.component';
import { DipendenteListComponent } from './dipendente-list/dipendente-list.component';
import { GestioneDipendenteComponent } from './gestione-dipendente/gestione-dipendente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'dipendente', pathMatch: 'full' },
 // {path:'gestioneDipendente', component: GestioneDipendenteComponent},
  { path: 'listaDipendenti', component: DipendenteListComponent },
  { path: 'inserisciDipendente', component: CreateDipendenteComponent },
  //{path: '**', component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
