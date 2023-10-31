import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Crud } from './crud';
import { CrudService } from './crud.service';
import { SharedDataServiceService } from '../shared-data-service.service';


@Component({
  selector: 'app_crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})


export class CrudComponent implements OnInit {

 
  protected titulo="CRUD usuarios";
  protected lista:Crud[]=[];
  protected busqueda: string="";
  protected lista2:Crud[]=[];

  constructor(private CrudService:CrudService, private shared:SharedDataServiceService){
  }
 //carga de inicio
  ngOnInit():void{
    this.shared.setCambioC(true);
  }
  //barra de busqueda
  onBusquedaChange(): void {
    this.lista2= this.lista.filter(n=> n.nombre.toUpperCase().includes(this.busqueda.toUpperCase()))
  }
  //borrar
  onDelete(id:number):void {
    this.CrudService.delete(id).subscribe();
    this.shared.setCambioC(true);
  }
  //activar interruptores de edicion y enviar objeto 
  onEdit(objeto:Crud):void {
   this.shared.setCambio(true);
   this.shared.setCreacion(false);
   this.shared.setObj(objeto);
   this.shared.setEdicion(true);
  }
  //activar interruptores de creacion
  onCreate(): void {
    this.shared.setCambio(true);
    this.shared.setCreacion(false);
  }
//detectar cambios en datos
ngDoCheck():void{
  if(this.shared.getCambioC()){
    this.cargarTodo();
    this.shared.setCambioC(false);
  }
}
  
  //recargar los datos
  cargarTodo():void{
    this.CrudService.getAll().subscribe(metodo1 => this.lista= metodo1 )
    this.CrudService.getAll().subscribe( metodo1 => this.lista2= metodo1 )
  }
}
