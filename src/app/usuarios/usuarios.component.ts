import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { FirebaserviceService} from './../services/firebaservice.service'
import { FormControl, FormsModule} from '@angular/forms'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faEdit, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
 
  faEdit = faEdit;
  faTrash = faTrash;
  faSearch = faSearch;
  
  
  
  




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
    private fbSvc :  AngularFirestore,
    private fb : FirebaserviceService
  ) {
   
    
  } 
  config:any;
  collection: any = { count: 0, data: [] }
  idFirabaseActualizar: any = '';
  actualizar: boolean = false;
  
  

  ngOnInit() {
   
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.data.length

  
 
      
      
    }
  
    
    
    
    


    this.fb.showUser().subscribe(resp => {

      this.collection.data = resp.map((e: any) => {
        return {
          
          name: e.payload.doc.data().name,
          email: e.payload.doc.data().email,
          rfc: e.payload.doc.data().rfc,
          phone: e.payload.doc.data().phone,
          adress: e.payload.doc.data().adress,
          cp: e.payload.doc.data().cp,
          idFirebase: e.payload.doc.id
        }
        
      })
 
    },
      error => {
        console.error(error);
      }
    );
  }
  
  pageChanged(event : any) {
    this.config.currentPage = event;
  }


  eliminar(item: any): void {
    this.fb.deleteUser(item.idFirebase);
    alert("Usuario Eliminado")
    
}


openEdit(longContent: any, item:any) {
  this.modalService.open(longContent, { scrollable: true });
  
  this.Formulario.setValue({
    
    name: item.name,
    email :item.email,
    rfc: item.rfc,
    phone: item.phone,
    adress: item.adress,
    cp: item.cp,
   
    
  })
  
  this.idFirabaseActualizar = item.idFirebase;
  
  this.actualizar = true;
  
}
actualizarUser() {
  if ((this.idFirabaseActualizar)) {
    this.fb.updateUser(this.idFirabaseActualizar, this.Formulario.value).then(resp => {
      this.Formulario.reset();
      this.modalService.dismissAll();
    }).catch(error => {
      console.error(error);
    });
 
    
  }
}

filter_value:any =''

handleSearch(value:any){

this.filter_value = value
  
}
}



 

