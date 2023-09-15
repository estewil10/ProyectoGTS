import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgregarService } from 'src/app/servicios/agregar.service';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.scss']
})
export class HistoriaClinicaComponent {
  
  formGroup : FormGroup;
  Historias:any;

  constructor(private agregarService: AgregarService, public formulario:FormBuilder, private ruteador: Router){

    this.formGroup=this.formulario.group({

      nhistoria: ['', Validators.required],
      mconsulta: ['', Validators.required],
      eactual: ['', Validators.required],
      apersonales: ['', Validators.required],
      afamiliares: ['', Validators.required],
      cabeza: ['', Validators.required],
      cuello: ['', Validators.required],
      torax: ['', Validators.required],
      abdomen: ['', Validators.required],
      pelvis: ['', Validators.required],
      extremidades: ['', Validators.required],
      temp: ['', Validators.required],
      pa: ['', Validators.required],
      fc: ['', Validators.required],
      fr: ['', Validators.required],
      pu: ['', Validators.required],
      peso: ['', Validators.required],
      talla: ['', Validators.required],
      imc: ['', Validators.required],
    })
  }

  ngOnInit():void{
  
  
  }
  
  agregarHc(){
    if(window.confirm("Desea agregar la historia clinica?")){
    this.agregarService.agregarHc(this.formGroup.value).subscribe();
    //this.ruteador.navigateByUrl('/ver');     
    }
  }
}
