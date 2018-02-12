import {Component, OnInit} from '@angular/core';


import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cityList: Array<any>;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getCityList()
      .subscribe(data => {
        this.cityList = data;
      });
  }

  deleteTz(city): void {
    this.appService.deleteTimeZone(city.tz);
  }
}
