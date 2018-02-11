
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CityList} from './citylist.data.mock';
import 'rxjs/add/observable/of';
// import {ResponseOptions} from '@angular/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public getCityList(): Observable<any> {
    return Observable.of(CityList);
  }
}
