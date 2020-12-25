import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZodiacPipe } from './zodiac.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ZodiacPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
