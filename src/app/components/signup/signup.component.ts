import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data = {
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    gender: "",
    model: "",
    productType: "",
    price: "",
    commissionPercentage: "",
    minSellingPrice: "",
    maxSellingPrice: "",
    productTypeId: "",
    levelCommissionPercentage: "",
    level: ""



  }


  constructor(private signup: SignupService, private snack: MatSnackBar) { }
  usertype: string = "";
  ngOnInit(): void {
    this.usertype = history.state.usertype;
    console.log(history.state)
    console.log(this.usertype)
  }


  doSignup() {

    console.log("DATA", this.data);
    if ((this.usertype == 'admin' || this.usertype == 'salesPerson') &&
      (this.data.name == '' || this.data.email == '' || this.data.password == '' || this.data.mobileNumber == '')) {
      this.snack.open("Fields are empty!!", "OK");
      return;
    }
    else if (this.usertype == 'product' &&
      (this.data.model == '' || this.data.productType == '' || this.data.price == '')) {
      this.snack.open("Fields are empty!!", "OK");
      return;
    }
    else if (this.usertype == 'commissionRule' &&
      (this.data.commissionPercentage == '' || this.data.minSellingPrice == '' || this.data.maxSellingPrice == ''
        || this.data.productTypeId == '')) {
      this.snack.open("Fields are empty!!", "OK");
      return;
    }

    this.signup.doSignup(this.data, this.usertype).subscribe(
      response => {
        console.log(response);
        this.snack.open(response, "OK");
      },
      error => {
        console.log("Error", error);
      }

    )
  }



}
