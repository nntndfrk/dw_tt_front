import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-custom-timezone',
  templateUrl: './custom-timezone.component.html',
  styleUrls: ['./custom-timezone.component.scss']
})
export class CustomTimezoneComponent implements OnInit {
  tz = 0;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  addTimeZone() {

    this.appService.addTimeZone(this.tz);
  }

}
