import { Component} from '@angular/core';
import { Crud } from '../crud/crud';
import { CrudService } from '../crud/crud.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { SharedDataServiceService } from '../shared-data-service.service';





@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent  {
  
  objeto:Crud = new Crud();
  form:FormGroup;
  nombreControl:any;
  edadControl:any;
  telefonoControl:any;

 
  
constructor (private crudservice:CrudService, private fb:FormBuilder, private shared:SharedDataServiceService) {  
  
  this.form = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern('[A-Za-z\\s\\-].+'),Validators.minLength(10),Validators.maxLength(60)]],
    edad:['',[Validators.required,Validators.max(99),Validators.min(18),Validators.maxLength(2)]],
    telefono: ['', [Validators.required, Validators.pattern(/^(?:\+\d{1,4}[-\s()]*\d{1,4}[-\s()]*\d{1,4}[-\s()]*\d{1,10}|\(\d{1,4}\)\s*\d{1,4}[-\s]*\d{1,4})$/)]],

  })} 

  
    //cargar datos y validar
  ngDoCheck(): void{
    
    if(this.shared.getCambio() && this.shared.getCreacion()){
      
    this.objeto= new Crud();
    console.log(this.objeto);
    this.shared.setCambio(false)
    this.shared.setCreacion(false);
    }else if(this.shared.getCambio() && !this.shared.getCreacion()){

    this.objeto= this.shared.getObj();
    this.shared.setObj(new Crud());
    console.log(this.objeto);
    this.shared.setCambio(false)
    this.shared.setCreacion(false);
    
    this.form.get('edad')?.setValue(this.objeto.edad);
    this.form.get('nombre')?.setValue(this.objeto.nombre);
    this.form.get('telefono')?.setValue(this.objeto.telefono);
    
    }
    
    this.nombreControl = this.form.get('nombre');
    this.edadControl = this.form.get('edad');
    this.telefonoControl = this.form.get('telefono');

  }
  //enviar
  onSubmit(id?:number){
    if(this.form.valid){
      this.objeto = this.form.value;
     this.create(id);
     this.clear();
    }else {    
      alert("formulario invalido")
    }
  }
  //crear datos
  create(id?:number):void{
    if(this.shared.getEdicion() && id){
      
      this.crudservice.update(this.objeto, id).subscribe();
      this.shared.setCambioC(true);
      this.clear();
    }else{
      this.crudservice.create(this.objeto).subscribe();
      this.shared.setCambioC(true);
      this.clear();
      
      
    }
   
  }
  //limpiar formulario
  clear():void{
    this.objeto= new Crud();
    this.nombreControl!;
    this.nombreControl!;
    this.edadControl!;
    this.telefonoControl!;
    this.shared.setEdicion(false);
    this.shared.setCambio(false)
    this.shared.setCreacion(false);
    this.form.markAsUntouched();
    
    
    
   

  }

 
}

