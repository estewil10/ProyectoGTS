import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgregarService } from 'src/app/servicios/agregar.service';

@Component({
  selector: 'app-listarhc',
  templateUrl: './listarhc.component.html',
  styleUrls: ['./listarhc.component.scss']
})
export class ListarhcComponent implements OnInit {


  Historias: any;

constructor(private agregarService: AgregarService, private router:Router, private http: HttpClient){}

  ngOnInit():void{

         this.agregarService.listarhistoria().subscribe(data => {
          this.Historias=data;
          console.log(this.Historias);
          
    });
    
}
}
