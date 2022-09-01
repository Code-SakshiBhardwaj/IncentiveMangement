import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/service/view.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: any;
  constructor(private profile: ViewService) { }

  ngOnInit(): void {
    this.showProfileInfo();
  }
  showProfileInfo() {
    this.profile.showProfileInfo(sessionStorage.getItem('userType'), sessionStorage.getItem('email')).subscribe(
      response => {
        this.data = response;
        console.log(response);
      }
      ,
      error => {
        console.log(error);
      }

    )
  }
}
