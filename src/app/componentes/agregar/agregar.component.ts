import { Component, OnInit } from '@angular/core';
import { AgregarService } from 'src/app/servicios/agregar.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit{

  formGroup: FormGroup;

  constructor(private agregarService: AgregarService, public formulario:FormBuilder, private ruteador: Router){

    this.formGroup=this.formulario.group({

      tipo_id: ['', Validators.required],
      numero: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required],
      fecha: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      contrato: ['', Validators.required],
      ciudad: ['', Validators.required],
      departamento: ['', Validators.required],

    })
  }

  ngOnInit(){
    
  }
  
  agregar(){
    this.agregarService.agregar(this.formGroup.value).subscribe();
    this.ruteador.navigateByUrl('/tablero');
      
    }
    
  }


  

  

     