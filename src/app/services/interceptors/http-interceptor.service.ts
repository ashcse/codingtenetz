import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Type } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from '../cookie.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let reqWithHeaders =  httpRequest.clone();

    if(!httpRequest.headers.has('Content-Type') && !(httpRequest.body instanceof FormData))
    {
      reqWithHeaders = httpRequest.clone({ headers: httpRequest.headers.set('Content-Type', 'application/json')});
    }

    reqWithHeaders = reqWithHeaders.clone({setHeaders: { Authorization: `token ${this.cookieService.getProfileVisitorToken()}`}});

    if(this.cookieService.isLoggedIn()) {
      // Update token when user is logged in
      reqWithHeaders = reqWithHeaders.clone({setHeaders: { Authorization: `token ${this.cookieService.getToken()}`}});
    }    
    return next.handle(reqWithHeaders);
  }  
}
