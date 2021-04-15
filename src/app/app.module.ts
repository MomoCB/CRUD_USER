import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { NgxPaginationModule } from 'ngx-pagination';


import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   
  

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
   AngularFireModule.initializeApp(environment.firebase),
   AngularFirestoreModule,
   NgxPaginationModule,
   NgbModule,
  
   
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
