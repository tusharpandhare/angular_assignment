import { Component, OnInit } from '@angular/core';
import {FireserviceService} from '../fireservice.service';
import {item} from '../item';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  item: item[];

  constructor(public db: FireserviceService) {

   }

  ngOnInit(): void {
 this.db.getdata().subscribe(itm => {
   console.log(itm);
   this.item = itm;
   console.log(this.item);
 } );

  }

}
