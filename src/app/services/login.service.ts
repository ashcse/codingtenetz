import { Injectable } from '@angular/core';
import { loginInfo } from '../models/loginInfo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //  url: string = 'https://codingtenetz.com/matrix/api/obtain-token/';


  constructor(private httpClient: HttpClient) { }

  public login(loingInfo: loginInfo): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // const url = 'https://codingtenetz.com/matrix/api//vehicle/';
    const url_auth = 'http://localhost:8000/api/auth/';
    return this.httpClient.post(url_auth, { 'username': loingInfo.userName, 'password': loingInfo.password });
  }

  // STORE the token in localstore:
  private setToken(token: string) {
    // First, serialize it (but just if token is not string type).
    const tokenString: string = JSON.stringify(token);
    localStorage.setItem('token', tokenString);
  }

  // READ the token from localstorage and Deserialize
  private getToken(): string | null {
    let token = localStorage.getItem('token');
    if (token != null) {

      // You just need to parse if you serialized it inside setToken() method
      //token = JSON.parse(carItemsString);
    }
    return token;
  }
}
