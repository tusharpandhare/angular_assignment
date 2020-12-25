import { Injectable } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {observable, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import {item} from '../app/item';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { getLocaleDateFormat } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class FireserviceService {
  firecollection: AngularFirestoreCollection<item>;
  courses: Observable<item[]>;
  itemdoc: AngularFirestoreDocument<item>;
  constructor(public db: AngularFirestore) {
   this.firecollection = this.db.collection("todo");
   this.courses = this.firecollection.snapshotChanges().pipe(map(changes =>{
    return changes.map(a => {
      const data = a.payload.doc.data() as item;
      return data;
    });
   }));


      // console.log(this.courses);
      // this.course = todo;



  //  getvalue(){
  //  this.db.collection("todo").snapshotChanges().subscribe(item => {
  //   console.log(  item.map);
  //  });
  }
  getdata(){
    return this.courses;
    
  }
}
