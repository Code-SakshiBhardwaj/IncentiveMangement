import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private basUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  doLogin(data: any, usertype: any) {
    return this.http.get(`${this.basUrl}/${usertype}/login/${data.mailId}/${data.password}`,
      { responseType: 'text' })
  }
}
