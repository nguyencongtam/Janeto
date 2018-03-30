import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoginService } from './login.service';
import { RequestMethod } from '@angular/http';

@Injectable()
export class GetprofileService {
  emailUser: string;
  constructor(private http: Http, private _login: LoginService) {   }

  getProfile() {
    this.emailUser = localStorage.getItem('email');
    const URL = 'http://localhost:8081/users/' + this.emailUser;
    return this.http.get(URL)
        .toPromise()
        .then(response => response.json());
  }

  update (id, body) {
    const URL = 'http://localhost:8081/users/' + id;
    const headers = new Headers({ 'Content-Type' : 'application/json', 'token': localStorage.getItem('token') });
    const option = new RequestOptions({
      headers: headers,
      method: RequestMethod.Put
    });
    console.log(localStorage.getItem('token'));

    return this.http.put(URL, body, {headers: headers})
        .toPromise()
        .then(response => response.json());
  }
}
