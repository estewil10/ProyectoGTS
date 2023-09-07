import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgregarService } from 'src/app/servicios/agregar.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {

  Pacientes:any;

constructor(private agregarService: AgregarService, private router:Router, private http: HttpClient){}

  ngOnInit():void{
    this.agregarService.listarPacientes().subscribe(data => {
         this.Pacientes=data;
    
  });

}
}
