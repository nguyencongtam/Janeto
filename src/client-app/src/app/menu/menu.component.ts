import { Component, OnInit } from '@angular/core';
import { LoginService } from '../providers/login.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // isLogin = new BehaviorSubject<Boolean>(false);
  isLogin: any;

  constructor(private _login: LoginService) {
  }

  ngOnInit() {
    this._login.IsLogin.subscribe(value => {
      this.isLogin = value;
    });

    if (localStorage.getItem('token')) {
      this.isLogin = true;
    }
    console.log('local login ' + this.isLogin);
  }

}
