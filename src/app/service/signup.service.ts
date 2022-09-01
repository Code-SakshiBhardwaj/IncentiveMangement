import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  doSignup(data: any, usertype: any) {
    return this.http.post(`${this.baseUrl}/${usertype}/add`, data, { responseType: 'text' });
  }
}


