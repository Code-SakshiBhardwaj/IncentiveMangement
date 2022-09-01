import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { ViewService } from 'src/app/service/view.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  session: any;
  data = {
    mailId: "",
    password: ""
  }

  constructor(private login: LoginService, private view: ViewService, private router: Router, private snack: MatSnackBar) { }
  usertype: string = "";
  ngOnInit(): void {
    this.usertype = history.state.usertype;
    console.log(history.state)
    console.log(this.usertype)
  }
  doLogin() {
    console.log("DATA", this.data);
    if (this.data.mailId == '' || this.data.password == '') {
      this.snack.open("Fields are empty!!", "OK");
      return;
    }
    this.login.doLogin(this.data, this.usertype).subscribe(
      response => {
        console.log(response);

        if (response && this.usertype == 'admin') {
          this.view.showProfileInfo(this.usertype, this.data.mailId).subscribe(
            response => {
              console.log(response);
              this.session = response;
              sessionStorage.setItem('userType', this.usertype);
              sessionStorage.setItem('userId', this.session.adminId);
              sessionStorage.setItem('email', this.session.email);
              sessionStorage.setItem('name', this.session.name);
              this.snack.open("Logging in....please wait!", "👍", {
                duration: 4 * 1000,
              });



            }
          )
          this.router.navigate(['/admindashboard']);
        }
        else if (response && this.usertype == 'salesPerson') {
          this.view.showProfileInfo(this.usertype, this.data.mailId).subscribe(
            response => {
              console.log(response);
              this.session = response;
              sessionStorage.setItem('userType', this.usertype);
              sessionStorage.setItem('userId', this.session.adminId);
              sessionStorage.setItem('email', this.session.email);
              sessionStorage.setItem('name', this.session.name);
              this.snack.open("Logging in....please wait!", "👍", {
                duration: 4 * 1000,
              });
            }
          )
          this.router.navigate(['/salespersondashboard']);
        }
        else {
          this.snack.open("Wrong Id or Password !", "Cancel");
        }
      },
      error => {
        console.log(error);
        this.snack.open("Error Occured, please try again later!", "Cancel");
      }

    )
  }


}
