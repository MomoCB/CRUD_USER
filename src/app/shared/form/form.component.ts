
import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormControl, Validators} from '@angular/forms'

import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaserviceService} from './../../services/firebaservice.service'
import { NgbModal,  } from '@ng-bootstrap/ng-bootstrap';
import {faUserPlus } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  
faUserPlus = faUserPlus;
  
  
  closeResult: string = '';


  Formulario = new FormGroup ({
   
    name : new FormControl(''),
    email : new FormControl(''),
    rfc : new FormControl(''),
    phone : new FormControl(''),
    adress : new FormControl(''),
    cp : new FormControl('')
   
  })
  constructor(
    
    private modalService: NgbModal,
    private fbSvc :  FirebaserviceService,
   // private modalService: NgbModal,
    public fb: FormBuilder,
  ) { 
    this.Formulario = fb.group({

    name: ['',Validators.required],
    email: ['',Validators.required],
    rfc: ['',Validators.required],
    phone: ['',Validators.required],
    adress: [''],
    cp: ['',Validators.required],

    
  });

}



  collection = { count: 0, data: [] }

  ngOnInit(): void {
  

  
}

  open(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }
  
 


  onRegister():void{
    if (this.Formulario.valid) {
      console.log(this.Formulario.value)
    }
    else{
      alert("Todos los campos son obligatorios")
      
    }
  
    const {name, email, rfc, phone, adress, cp} = this.Formulario.value;
    
    this.fbSvc.createuser(name, email,rfc, phone, adress, cp).then(result=> {
     
      this.Formulario.reset();
     
      window.confirm("guardado con Exito");

    }).catch(err =>{
      console.error(err);

    })
  }
}
    
  
  
    
    
    
   

    
  