import { Component, OnInit } from '@angular/core';
import { LoginService } from '../providers/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private _login: LoginService) {
  }

  ngOnInit() {
  }

}
