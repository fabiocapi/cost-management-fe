import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDipendenteComponent } from './create-dipendente/create-dipendente.component';
import { DipendenteListComponent } from './dipendente-list/dipendente-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GestioneDipendenteComponent } from './gestione-dipendente/gestione-dipendente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BasicComponent } from './basic/basic.component';
import { UpdateDipendenteComponent } from './update-dipendente/update-dipendente.component';

@NgModule({

  declarations: [
    AppComponent,
    CreateDipendenteComponent,
    DipendenteListComponent,
    GestioneDipendenteComponent,
    PageNotFoundComponent,
    BasicComponent,
    UpdateDipendenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
