import { Component, OnInit } from '@angular/core';
import { AgregarService } from 'src/app/servicios/agregar.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, debounceTime } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {

  Pacientes:any;

constructor(private agregarService: AgregarService, private router:Router, private http: HttpClient){}

  ngOnInit():void{
    this.agregarService.listarPacientes().subscribe(data => {
         this.Pacientes=data;
    
    
  });

  }
  
 


  Eliminar(id:any, iControl: any){
    if(window.confirm("Desea elimira el paciente?")){
      this.agregarService.Eliminar(id).subscribe((data)=>{
        this.Pacientes.splice(iControl,1);
          
    });
 
}

}
Buscar = new FormControl('');

BuscarPaciente(){
  this.Buscar.valueChanges.pipe(debounceTime(2000)).subscribe(data =>{
    console.log(data);
    this.agregarService.BuscarPacientes(data);
    
  })

}

BuscarPacientes(){
  this.http.get('http://localhost/conexion/').subscribe();
  
}

}

