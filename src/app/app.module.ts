import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { OptionComponent } from './components/option/option.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { SalespersondashboardComponent } from './components/salespersondashboard/salespersondashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginService } from './service/login.service';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { SignupService } from './service/signup.service';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { ViewService } from './service/view.service';
import { ProfileComponent } from './components/profile/profile.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OptionComponent,
    LogInComponent,
    SignupComponent,
    AdmindashboardComponent,
    SalespersondashboardComponent,
    TableComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatTabsModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatMenuModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressBarModule,



  ],
  providers: [LoginService, SignupService, ViewService, MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
