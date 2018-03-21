import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IQuan } from './../models/IQuan';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuanAnService {
  private _dataQuan: BehaviorSubject<IQuan[]> = new BehaviorSubject(new Array());
  private _partyQuan: BehaviorSubject<IQuan[]> = new BehaviorSubject(new Array());
  private urlGetDataQuan = 'http://localhost:8081/quanan';
  private idQuanAn = new BehaviorSubject<String>("");
  nhanIdQuanAn = this.idQuanAn.asObservable();
  constructor(private http: Http) { }

  get getAllQuan() {
    return this._dataQuan.asObservable();
  }
  get partyQuan()
  {
    return this._partyQuan.asObservable();
  }

  getDataQuan(): Promise<any> {
    return this.http.get(this.urlGetDataQuan).toPromise().then(response => {
      this._dataQuan.next(response.json());
      console.log("getDataQuan: "+ response.json());
      
      return response.json();
    }).catch(err => console.log('loi lay url get'));
  }

   getPartyQuanAn(id) {
     try{
      return this.http.get(this.urlGetDataQuan+'/'+id).toPromise().then(response => {
        this._partyQuan.next(response.json());
        console.log("data service: " + response.json()) ;       
        return response.json();
      }).catch(err => console.log('loi lay url get: ' + err));     
     }catch(err){console.log(err);
     }

  }

  shareIdQuanAn(data: String)
  {
    this.idQuanAn.next(data);
  }


  
}
