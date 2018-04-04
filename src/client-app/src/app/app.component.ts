import { Component } from '@angular/core';
import { LoginService } from './providers/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'An Cung';

  constructor(private _loginService: LoginService, private router: Router) {
    if (localStorage.getItem('token')) {
      this._loginService.getToken(localStorage.getItem('token'));
    } else {
      if (!localStorage.getItem('tokenS')) {
        localStorage.removeItem('email');
        localStorage.removeItem('isLogin');
        localStorage.removeItem('local_login');
        this.router.navigateByUrl('/login');
      }

    }

  }
}
