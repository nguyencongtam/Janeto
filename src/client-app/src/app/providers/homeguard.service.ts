import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class HomeguardService implements CanActivate {
  constructor() { }
  isLogin: String = 'false';

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.isLogin = localStorage.getItem('isLogin');
    console.log(this.isLogin);
    if (this.isLogin === 'true') {
       return true;
    }
    return false;
  }
}
