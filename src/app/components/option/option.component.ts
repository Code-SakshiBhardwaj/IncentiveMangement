import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  worktype: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.worktype += history.state.worktype;
    console.log(history.state)
    console.log(this.worktype)

    if (sessionStorage.getItem('userType') == 'admin') {
      this.router.navigate(['/admindashboard']);
    }
    else if (sessionStorage.getItem('userType') == 'salesPerson') {
      this.router.navigate(['/salespersondashboard']);
    }
  }
}
