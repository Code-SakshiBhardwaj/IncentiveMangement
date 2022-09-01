import { NgModule, ViewChildren } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { OptionComponent } from './components/option/option.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { TableComponent } from './components/table/table.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SalespersondashboardComponent } from './components/salespersondashboard/salespersondashboard.component';



const routes: Routes = [
  {
    path: "sendoption",
    component: OptionComponent,
    pathMatch: "full"
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: LogInComponent,
    pathMatch: "full"
  },
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: "full"
  },

  {
    path: "admindashboard",
    component: AdmindashboardComponent,
    children: [
      {
        path: "table-admin",
        component: TableComponent,

      },
      {
        path: "table-product",
        component: TableComponent,

      },
      {
        path: "table-salesPerson",
        component: TableComponent,

      },
      {
        path: "table-commissionRule",
        component: TableComponent,

      },
      {
        path: "table-levelCommissionRule",
        component: TableComponent,

      },
      {
        path: "signup-admin",
        component: SignupComponent,
      },
      {
        path: "signup-salesPerson",
        component: SignupComponent,
      },
      {
        path: "signup-product",
        component: SignupComponent,
      },
      {
        path: "signup-commissionRule",
        component: SignupComponent,
      },
      {
        path: "signup-levelCommissionRule",
        component: SignupComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      }

    ]
  },
  {
    path: "salespersondashboard",
    component: SalespersondashboardComponent,
    children: [
      {
        path: "table-commissionRule",
        component: TableComponent,

      },
      {
        path: "table-product",
        component: TableComponent,

      },
      {
        path: "profile",
        component: ProfileComponent,
      }
      , {
        path: "table-levelCommissionRule",
        component: TableComponent,

      },]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
