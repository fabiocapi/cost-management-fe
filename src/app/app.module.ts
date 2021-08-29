import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDipendenteComponent } from './create-dipendente/create-dipendente.component';
import { DipendenteListComponent } from './dipendente-list/dipendente-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GestioneDipendenteComponent } from './gestione-dipendente/gestione-dipendente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDipendenteComponent,
    DipendenteListComponent,
    GestioneDipendenteComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
