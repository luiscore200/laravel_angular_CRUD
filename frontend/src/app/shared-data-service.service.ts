import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crud } from './crud/crud';
import { CrudComponent } from './crud/crud.component';




@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {

  private crud:Crud= new Crud();
  private creacion:boolean = false;
  private cambio:boolean = false;
  private edicion:boolean = false;
  private cambioC:boolean = false;
  
 
  

  

  constructor() { }


  setObj(objeto:Crud):void{this.crud= objeto;}
  getObj():Crud {return this.crud; }
  getCreacion(): boolean {return this.creacion;}
  setCreacion(x:boolean): void {this.creacion= x;}
  getCambio(): boolean {return this.cambio;}
  setCambio(x:boolean): void {this.cambio = x;}
  setEdicion(x:boolean):void{this.edicion= x;}
  getEdicion():boolean {return this.edicion; }
  getCambioC(): boolean {return this.cambioC;}
  setCambioC(x:boolean): void {this.cambioC = x;}


}
