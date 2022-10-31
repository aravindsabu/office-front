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
import { HttpClientModule } from '@angular/common/http';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { SearchSecurityComponent } from './search-security/search-security.component';

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
  },
  {
    path:"look",component:SearchemployeeComponent
  },
  {
    path:"sep",component:AddSecurityComponent
  },
  {
    path:"oct",component:ViewSecurityComponent
  },
  {
    path:"nov",component:SearchSecurityComponent
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
    ViewEmployeeComponent,
    SearchemployeeComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    SearchSecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
