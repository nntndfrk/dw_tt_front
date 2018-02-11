import {Component, OnInit} from '@angular/core';


import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cityList: Array<any>;

  constructor(private appService: HttpService) {
  }

  ngOnInit() {
    this.appService.getCityList()
      .subscribe(data => {
        this.cityList = data;
      });
  }
}
