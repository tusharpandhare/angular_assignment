import { Component } from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "data-binding";
  divfont = 10;
  ml = 5;
  mt = 5;
  // tslint:disable-next-line: typedef
  // maindiv($event){
  //   // tslint:disable-next-line: quotemark
  //   console.log($event);

  // }

  incfont(){

    this.divfont = this.divfont + 2;

  }

  decfont(){

    this.divfont = this.divfont - 2;

  }
  incMT(){
    this.mt = this.mt + 5;

  }
  decMT(){
    this.mt = this.mt - 5;

  }
  incML(){
    this.ml = this.ml + 5;
  }
  decML(){
    this.ml = this.ml - 5;

  }
  dbccl($event){
    console.log($event.target.value);
  }

}
