import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { TipologiacontrattoComponent } from './tipologiacontratto/tipologiacontratto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
//import { CreateDipendenteComponent } from './create-dipendente/create-dipendente.component';
//import { UpdateDipendenteComponent } from './update-dipendente/update-dipendente.component';
//import { DipendenteListComponent } from './dipendente-list/dipendente-list.component';

@NgModule({
  declarations: [
  //  CreateDipendenteComponent,
  //  UpdateDipendenteComponent,
  //  DipendenteListComponent,
    ClienteAddComponent,
    ClienteUpdateComponent,
    ClienteListComponent,
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    TipologiacontrattoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
