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
        barrio: data[0]['barrio'],
        fecha: data[0]['fecha'],
        edad: data[0]['edad'],
        lnacimiento: data[0]['lnacimiento'],
        sexo: data[0]['sexo'],
        contrato: data[0]['contrato'],
        regimen: data[0]['regimen'],
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
        barrio: [''],
        correo: [''],
        fecha: [''],
        edad: [''],
        lnacimiento: [''],
        sexo: [''],
        contrato: [''],
        regimen: [''],
        ciudad: [''],
        departamento: ['']
    
        })    
  }

  ngOnInit(){
    
  }
  
  Editar():any{
    if(window.confirm("Desea actualizar el paciente?")){
    this.agregarService.EditarEmpleado(this.ID, this.formGroup.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/tablero');  
    });
  }
}
}
  


