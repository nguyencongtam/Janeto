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

  constructor(private _login: LoginService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    localStorage.setItem('isLogin', 'false');
  }

  signin(email: string, password: string) {
    // console.log(this.email = email);
    // console.log(this.password = password);

    this._login.login(this.email, this.password).subscribe(res => {
      // thanh cong
      this.toastr.success('Login successfuly');
      localStorage.setItem('isLogin', 'true');
      this.router.navigate(['/home']);
    }, err => {
      console.log('error login');
      this.toastr.error('Error to login, please check your infomation');
    });
    
    
  }
}
