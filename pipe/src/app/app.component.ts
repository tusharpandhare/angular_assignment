import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-assignment';
  name = 'tushar';
  // tslint:disable-next-line: new-parens
  str = 'Rajan,9845123450,rajan@gmail.com,10/08/1998,Bangalore';
}
