import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  public getUserName() {
    return localStorage.getItem('user') || '';
  }

  public login(userName: string, token: string ) {
     localStorage.setItem('user', userName);
     localStorage.setItem('token', token);
  }

  public getToken() {
    return localStorage.getItem('token') || '';
  }

  public getProfileVisitorToken(){
    return '225673d4754f625da923386e0cfe5bbc585f53b3';
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  logout(){
    localStorage.clear();
  }

}
