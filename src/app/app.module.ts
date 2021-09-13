import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { CommessaAddComponent } from './commessa-add/commessa-add.component';
import { CommessaUpdateComponent } from './commessa-update/commessa-update.component';
import { CommessaListComponent } from './commessa-list/commessa-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteUpdateComponent,
    ClienteAddComponent,
    ClienteListComponent,
    CommessaAddComponent,
    CommessaUpdateComponent,
    CommessaListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
