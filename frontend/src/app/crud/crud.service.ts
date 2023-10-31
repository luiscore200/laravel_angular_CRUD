import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Crud } from './crud';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url:string="http://127.0.0.1:8000/api/usuario";

  constructor(private http:HttpClient) { }

  getAll():Observable<Crud[]>{
    return  this.http.get<Crud[]>(this.url);
  }
  create(objeto:Crud):Observable<Crud>{
   return this.http.post<Crud>(this.url, objeto)

  }
  get(id:number):Observable<Crud>{
    return  this.http.get<Crud>(this.url +"/"+ id);
  }
  update(objeto:Crud,id:number):Observable<Crud>{
    return this.http.put<Crud>(this.url +"/"+ id, objeto)
 
   }

   delete(id:number):Observable<Crud>{
    return  this.http.delete<Crud>(this.url +"/"+ id);
  }
}

