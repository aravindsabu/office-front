import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"ok",component:EmployeeloginComponent
  },
  {
    path:"on",component:SecurityloginComponent
  },
  {
    path:"done",component:AdminComponent
  },
  {
    path:"book",component:AddEmployeeComponent
  },
  {
    path:"hook",component:ViewEmployeeComponent
  }


]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    EmployeeloginComponent,
    SecurityloginComponent,
    AdminComponent,
    AdminNavbarComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
