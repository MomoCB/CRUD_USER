
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


import { FormControl, FormsModule} from '@angular/forms'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import {debounceTime} from 'rxjs/operators'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //buscador
  search = new FormControl('')
  
 @Output('search') searchEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.search.valueChanges
    .pipe(
      
      debounceTime(300)

    ).subscribe(value=> this.searchEmitter.emit(value))
  }

}
