import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  title: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = sessionStorage.getItem('name');
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
