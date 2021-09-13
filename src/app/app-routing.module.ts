import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CreateDipendenteComponent } from './create-dipendente/create-dipendente.component';
import { DettaglioDipendentiComponent } from './dettaglio-dipendenti/dettaglio-dipendenti.component';
import { DipendenteListComponent } from './dipendente-list/dipendente-list.component';
import { GestioneDipendenteComponent } from './gestione-dipendente/gestione-dipendente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateDipendenteComponent } from './update-dipendente/update-dipendente.component';

const routes: Routes = [
  { path: '', redirectTo: 'dipendente', pathMatch: 'full' },
 // {path:'gestioneDipendente', component: GestioneDipendenteComponent},
  { path: 'listaDipendenti', component: DipendenteListComponent },
  { path: 'inserisciDipendente', component: CreateDipendenteComponent },
  { path: 'basic',component: BasicComponent, data: { title: 'Basic Select Example' }},
  { path: 'updateDipendente/:codiceFiscale/:aziendaId',component: UpdateDipendenteComponent},
  { path: 'dettaglioDipendenti', component: DettaglioDipendentiComponent},
  //{path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
