import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { VerComponent } from './componentes/ver/ver.component';
import { HistoriaClinicaComponent } from './componentes/historia-clinica/historia-clinica.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'tablero'},
  {path: "tablero", component:TableroComponent},
  {path: "agregar", component:AgregarComponent},
  {path: "tablero/editar/:id", component:EditarComponent},
  {path: "tablero/ver/:id", component:VerComponent},
  {path: "historia-clinica", component:HistoriaClinicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
