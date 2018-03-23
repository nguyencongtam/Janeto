import { Component, OnInit } from '@angular/core';
import { LoginService } from '../providers/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: String = '';
  password: String = '';
  isLogin: any = {};
  checked: Boolean = false;
  token: any;

  constructor(private _login: LoginService, private toastr: ToastrService, private router: Router,
    private socialAuthService: AuthService
  ) { }

  ngOnInit() {
    // localStorage.setItem('isLogin', 'false');
    if (localStorage.getItem('isLoginSocial') === 'true') {
      this.router.navigate(['/home']);
    }

    if (localStorage.getItem('token')) {
      this._login.setIsLogin(true);
      this.router.navigate(['/home']);
    }
  }

  check() {
    this.checked = !this.checked;
    // console.log(this.checked);
  }

  signin(email: string, password: string) {
    // console.log(this.email = email);
    // console.log(this.password = password);

    this._login.login(this.email, this.password).subscribe(res => {
      // thanh cong
      this.token = res;
      this.toastr.success('Login successfuly', '', { positionClass: 'toast-bottom-right' });
      // localStorage.setItem('isLogin', 'true');
      this._login.setIsLogin(true);
      localStorage.setItem('local_login', 'true');
      this.router.navigate(['/home']);
      if (this.checked) {
        localStorage.setItem('token', this.token);
      }
    }, err => {
      console.log('error login');
      this.toastr.error('Error to login, please check your infomation', '', { positionClass: 'toast-bottom-right' });
    });
  }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + 'sign in data : ' , userData);
        // Now sign-in with userData
          // check user
        this._login.findUserByEmail(userData.email).subscribe(res => {
          console.log(res);
          if (res !== 'null') {
            console.log('co email');
            this._login.setIsLogin(true);
            // localStorage.setItem('isLoginSocial', 'true');
            this.router.navigate(['/home']);
          } else {
            console.log('k co email');
              const payload = {
              Name: userData.name,
              Email: userData.email,
              Image: userData.image,
              Password: userData.id,
              Provider: userData.provider
            };
            this.createUserSocial(payload);
          }
        }, err => {
          this.toastr.error('Error finding user', 'Error social login', { positionClass: 'toast-bottom-right' });
        });

        // const payload = {
        //   Name: userData.name,
        //   Email: userData.email,
        //   Image: userData.image,
        //   Password: userData.id,
        //   Provider: userData.provider
        // };
        // this._login.loginSocial(payload).subscribe(res => {
        //   // thanh cong
        //   this.token = res;
        //   this.toastr.success('Login successfuly', '', { positionClass: 'toast-bottom-right' });
        //   this._login.setIsLogin(true);
        //   this.router.navigate(['/home']);
        //   if (this.checked) {
        //     localStorage.setItem('token', this.token);
        //   }
        // }, err => {
        //   console.log(err);
        //   this.toastr.error('Error to login', 'Error social login', { positionClass: 'toast-bottom-right' });
        // });


      }
    );
  }

  private createUserSocial(payload) {
    this._login.loginSocial(payload).subscribe(res => {
      // thanh cong
      this.token = res;
      this.toastr.success('Login successfuly', '', { positionClass: 'toast-bottom-right' });
      this._login.setIsLogin(true);
      localStorage.setItem('isLoginSocial', 'true');
      this.router.navigate(['/home']);
      if (this.checked) {
        localStorage.setItem('token', this.token);
      }
    }, err => {
      console.log(err);
      this.toastr.error('Error to login', 'Error social login', { positionClass: 'toast-bottom-right' });
    });
  }


}
