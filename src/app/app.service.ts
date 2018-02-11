
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CityList} from './citylist.data.mock';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class AppService {
  cityList = CityList;
  tzList$ = Observable.of(this.cityList);
  constructor(private http: HttpClient) {}

  public getCityList(): Observable<any> {
    return this.tzList$.delay(1000);
  }

  public addTimeZone(tz): void {
    const strTz = (tz > 0) ? `+${tz}` : `${tz}`;
    this.cityList.push({
      'name': `GMT ${strTz}`,
      'tz': `Etc/GMT${strTz}`
    });
  }
}
