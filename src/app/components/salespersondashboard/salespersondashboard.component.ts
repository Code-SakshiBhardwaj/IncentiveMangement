import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salespersondashboard',
  templateUrl: './salespersondashboard.component.html',
  styleUrls: ['./salespersondashboard.component.scss']
})
export class SalespersondashboardComponent implements OnInit {
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
