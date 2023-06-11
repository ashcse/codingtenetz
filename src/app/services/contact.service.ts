import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { enquiryInfo } from '../models/enquiry';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public addEnquiry(enquiry: enquiryInfo): Observable<any> {
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append('authorization', 'Token c699281d463da07f8e6ee0c88b061019c84995ad');

    const httpOptions1 = {
      headers: headers_object
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Token 225673d4754f625da923386e0cfe5bbc585f53b3'
      })
    };

    const url = 'http://localhost:8000/api/vehicle/';
    const url_enquiry = 'http://localhost:8000/api/enquiry/';

    return this.httpClient.post(url_enquiry, enquiry, httpOptions);

  }
}
