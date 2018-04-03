import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoginService } from './login.service';
import { RequestMethod } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GetprofileService {
  emailUser: string;
  private disable = new BehaviorSubject<Boolean>(false);

  constructor(private http: Http, private _login: LoginService) { }

  get Disable() {
    return this.disable.asObservable();
  }

  public setDisable(newValue: boolean) {
    this.disable.next(newValue);
  }

  getProfile() {
    this.emailUser = localStorage.getItem('email');
    const URL = 'http://localhost:8081/users/' + this.emailUser;
    return this.http.get(URL)
      .toPromise()
      .then(response => response.json());
  }

  update(id, body) {
    if (localStorage.getItem('token')) {
      const URL = 'http://localhost:8081/users/' + id;
      const headers = new Headers({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') });
      const option = new RequestOptions({
        headers: headers,
        method: RequestMethod.Put
      });
      // console.log(localStorage.getItem('token'));

      return this.http.put(URL, body, { headers: headers })
        .toPromise()
        .then(response => response.json());
    } else {
      const URL = 'http://localhost:8081/users/' + id;
      const headers = new Headers({ 'Content-Type': 'application/json', 'token': localStorage.getItem('tokenS') });
      const option = new RequestOptions({
        headers: headers,
        method: RequestMethod.Put
      });
      // console.log(localStorage.getItem('token'));

      return this.http.put(URL, body, { headers: headers })
        .toPromise()
        .then(response => response.json());
    }
  }
}
