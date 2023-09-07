import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { AgregarService } from 'src/app/servicios/agregar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  ID:any;
  formGroup: FormGroup;

  constructor(private activateroute: ActivatedRoute, private ruteador:Router, private agregarService: AgregarService, public formulario: FormBuilder){
      
      this.ID=this.activateroute.snapshot.paramMap.get('id');
      this.agregarService.Editar(this.ID).subscribe(data=>{
       this.formGroup.setValue({
        tipo_id: data[0]['tipo_id'],
        numero: data[0]['numero'],
        nombre: data[0]['nombre'],
        apellido: data[0]['apellido'],
        correo: data[0]['correo'],
        telefono: data[0]['telefono'],
        direccion: data[0]['direccion'],
        fecha: data[0]['fecha'],
        edad: data[0]['edad'],
        sexo: data[0]['sexo'],
        contrato: data[0]['contrato'],
        ciudad: data[0]['ciudad'],
        departamento: data[0]['departamento']
       })
      });

      this.formGroup=this.formulario.group({

        tipo_id: [''],
        numero: [''],
        nombre: [''],
        apellido: [''],
        telefono: [''],
        direccion: [''],
        correo: [''],
        fecha: [''],
        edad: [''],
        sexo: [''],
        contrato: [''],
        ciudad: [''],
        departamento: ['']
    
        })    
  }

  ngOnInit(){
    
  }
  
  Editar():any{
    this.agregarService.EditarEmpleado(this.ID, this.formGroup.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/tablero');  
    });
  }
}
  


