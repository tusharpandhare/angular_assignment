import { Component, OnInit } from '@angular/core';
import {FireserviceService} from '../app/fireservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-assignment';
  items;
  constructor(public service: FireserviceService){



  //  console.log("getting value" + service.getvalue());
  }


}
