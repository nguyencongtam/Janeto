import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  login(email, password) {
     // console.log(email, password);
      return this.http.post('http://localhost:8081/auth/login', {
      Email: email,
      Password: password
    }, {responseType: 'text'});
      // .subscribe(res => {
      //     console.log(res);
      //     console.log('successfully login');
      //     this.isLogin = true;
      //   },
      //   err => {
      //     console.log(err.message);
      //     console.log('Error occured');
      //   }
      // );
  }

}
