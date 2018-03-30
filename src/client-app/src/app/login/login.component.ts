import { Component, OnInit } from '@angular/core';
import { LoginService } from '../providers/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: String = '';
  password: String = '';
  isLogin: any = {};

  constructor(private _login: LoginService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  signin(email: string, password: string) {
    localStorage.setItem('email', email);

    this._login.login(this.email, this.password).subscribe(res => {
      // thanh cong
      localStorage.setItem('token', res);
      this.toastr.success('Login successfuly');
      // localStorage.setItem('isLogin', 'true');
      this._login.setIsLogin(true);
      this.router.navigate(['/home']);
    }, err => {
      console.log('error login');
      this.toastr.error('Error to login, please check your infomation');
    });
  }
}
