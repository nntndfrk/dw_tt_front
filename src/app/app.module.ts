import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Clock2Component } from './clock2/clock2.component';
import {ClarityModule} from '@clr/angular';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import { CustomTimezoneComponent } from './custom-timezone/custom-timezone.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    Clock2Component,
    CustomTimezoneComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
