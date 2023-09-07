import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class AgregarService {

  API='http://localhost/conexion/';

  constructor(private http: HttpClient) { }

  agregar(dato:Paciente):Observable<any>{
    return this.http.post(this.API+"?insertar=1",dato);
  }

  listarPacientes(){
    return this.http.get(this.API);
  }

   Editar(id:any):Observable<any>{
    return this.http.get(this.API+"?consultar="+id);
  }

  Eliminar(id:any):Observable<any>{
    return this.http.get(this.API+"?borrar="+id);
  }

  EditarEmpleado(id:any, dato:Paciente):Observable<any>{
    return this.http.post(this.API+"?actualizar="+id,dato);
   
  }

  BuscarPacientes(nombre: any):Observable<any>{
    return this.http.get(this.API+"?buscar="+nombre);
  }

  



}
