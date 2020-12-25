import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { MyservicesService } from './myservices.service';


@NgModule({
  declarations: [
    AppComponent,
    GetDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
