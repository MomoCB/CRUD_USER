import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormComponent} from './../shared/form/form.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import {SearchComponent} from './../shared/search/search.component';
import { FilterPipe } from './../../app/pipes/filter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    UsuariosComponent,
    FormComponent,
    SearchComponent,
    FilterPipe,
   
    
   
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
     FormsModule,
     NgbModule,
     FontAwesomeModule
  
  ]
})
export class UsuariosModule { }
