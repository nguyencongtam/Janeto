import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeguardService implements CanActivate, OnInit {
  constructor(private _login: LoginService) { }
  // isLogin: String = 'false';
  isLogin: any;

  ngOnInit() {
    // localStorage.setItem('isLogin', 'false');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // this.isLogin = localStorage.getItem('isLogin');
    // console.log(this.isLogin);
    // if (this.isLogin === 'true') {
    //    return true;
    // }
    // return false;

    this._login.IsLogin.subscribe(value => {
      // console.log(value);
      this.isLogin = value;
    });
    if (this.isLogin) {
      return true;
    }
    return false;
  }
}
