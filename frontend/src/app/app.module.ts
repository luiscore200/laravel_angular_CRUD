import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { ModalComponent } from './modal/modal.component';


const routes:Routes =[{path:'',redirectTo:'/crud',pathMatch:'full'},
{path:'crud', component:CrudComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
