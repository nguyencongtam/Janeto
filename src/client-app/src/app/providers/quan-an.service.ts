import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IQuan } from './../models/IQuan';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuanAnService {
  private _dataQuan: BehaviorSubject<IQuan[]> = new BehaviorSubject(new Array());
  private urlGetDataQuan = 'http://localhost:8081/quanan';

  constructor(private http: Http) { }

   get getAllQuan() {
    return this._dataQuan.asObservable();
  }

  getDataQuan(): Promise<any> {
    return this.http.get(this.urlGetDataQuan).toPromise().then(response => {
      this._dataQuan.next(response.json());
      return response.json();
    }).catch(err => console.log('loi lay url get'));
  }

  
}
