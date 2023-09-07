import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//angular mnaterial
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './componentes/editar/editar.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';
import { VerComponent } from './componentes/ver/ver.component';
import { HistoriaClinicaComponent } from './componentes/historia-clinica/historia-clinica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    VerComponent,
    HistoriaClinicaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
