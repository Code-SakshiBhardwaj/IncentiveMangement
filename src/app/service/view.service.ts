import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private baseUrl: string = "http://localhost:8080"
  constructor(private http: HttpClient) {

  }
  doView(datatype: any) {
    return this.http.get(`${this.baseUrl}/${datatype}/getAll`)
  }

  showProfileInfo(usertype: any, email: any) {
    return this.http.get(`${this.baseUrl}/${usertype}/getByEmail/${email}`)
  }

  delete(usertype: any, id: any) {
    return this.http.delete(`${this.baseUrl}/${usertype}/delete/${id}`)
  }

  update(usertype: any, data: any) {
    return this.http.post(`${this.baseUrl}/${usertype}/update`, data)
  }
}
