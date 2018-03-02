import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { QuanAn } from '../models/QuanAn';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class DataService {
  private _QuanAn: BehaviorSubject<QuanAn[]> = new BehaviorSubject(new Array())
  constructor(
    private http: Http, 
    private httpClient: HttpClient, 
    private toastr: ToastrService,
  )
    { }

get getAllQuanAn(){
  return this._QuanAn.asObservable();
}

  getQuanAn(): Promise<any>{
   return this.http.get('http://localhost:8081/quanan').toPromise().then(resopnse =>{
    this._QuanAn.next(resopnse.json());
     return resopnse.json();
   });
    }

  //   getDataWallets(): Promise<any>{
  //     return this.http.get('http://localhost:3000/api/wallet')
  //     .toPromise()
  //     .then(wallets => {
  //         let data = [];
  //         wallets.json().forEach(wallet => {
  //             let totalMoney = 0;
  //             wallet.transactions.forEach(transactions => {
  //                 totalMoney += Number(transactions.moneytransaction);
  //             });
  //             wallet.money = totalMoney;
  //             data.push(wallet)
  //         });
  //         this._allWallet.next(data);
  //         return data;
  //     })
  //     .catch(err => err);
  // }

  }
  
