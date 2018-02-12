import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

import * as moment from 'moment-timezone';

@Component({
  selector: 'app-clock2',
  templateUrl: './clock2.component.html',
  styleUrls: ['./clock2.component.scss']
})
export class Clock2Component implements OnInit {
  @Input() tz: string;
  momentDate: any;
  date: Date;
  minutes: number;
  hours: number;
  hoursAngle: number;
  minutesAngle: number;
  hoursAngleStyle: SafeStyle;
  minutesAngleStyle: SafeStyle;

  constructor(private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.momentDate = moment().tz(this.tz).format('YYYY-MM-DD HH:mm');
    this.date = new Date(this.momentDate);
    this.minutes = this.date.getMinutes();
    this.hours = this.date.getHours();
    this.hoursAngle = (this.hours * 30) + (this.minutes / 2);
    this.minutesAngle = (this.minutes * 6);
    this.hoursAngleStyle = this._sanitizer.bypassSecurityTrustStyle(`rotateZ(${this.hoursAngle}deg)`);
    this.minutesAngleStyle = this._sanitizer.bypassSecurityTrustStyle(`rotateZ(${this.minutesAngle}deg)`);
  }

}
