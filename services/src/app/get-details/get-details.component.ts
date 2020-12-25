import { Component, OnInit } from '@angular/core';
import {MyservicesService} from '../myservices.service'

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {
  itemname;
  itemcategory;
  itemprice;
  newarr=[];
  constructor(public service:MyservicesService) {
    
    console.log(service.getItemCategory());
    this.itemname = service.getItemName();
    this.itemcategory = service.getItemCategory();
    this.itemprice = service.getItemPrice();
    this.newarr =[this.itemname,this.itemcategory,this.itemprice];
    console.log(this.newarr);
   }

  ngOnInit(): void {
  }

}
