import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Clock2Component } from './clock2/clock2.component';
import {ClarityModule} from '@clr/angular';
import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    Clock2Component
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
