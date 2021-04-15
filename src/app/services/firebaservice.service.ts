import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaserviceService {

  constructor( private db: AngularFirestore
  
    
    ) {  }

    async createuser(name:string, email:string, rfc:string, phone:number, adress:any, cp:any){
      
      
      const result = await this.db.collection('usuario').add({name, email, rfc, phone, adress, cp});
     
      
     
      return result;
      }

      
  

    showUser(){

      return this.db.collection("usuario").snapshotChanges();
      

      

    }
    updateUser(id:any, usuario:any){
     return this.db.collection("usuario").doc(id).update(usuario);
     
    }
    deleteUser(id : any){
     return  this.db.collection("usuario").doc(id).delete();
    }
}
