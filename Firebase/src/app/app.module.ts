import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import {} from '@angular/fire';
import { from } from 'rxjs';
// import { FireserviceService } from './fireservice.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FireserviceService} from './fireservice.service';
import { environment } from 'src/environments/environment';
import { ShowdataComponent } from './showdata/showdata.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowdataComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "firebase fs"),
    AngularFirestoreModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
