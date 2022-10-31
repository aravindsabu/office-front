import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addemployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addemployee",data)
  }
  viewEmploye=()=>{
    return this.http.get("http://localhost:8080/viewEmployee")
  }
  deleteEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee",data)
  }
  searchEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/searchEmployee",data)
  }
  editEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/editEmployee",data)
  }
  addSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/addSecurity",data)
  }
  viewSecurity=()=>{
    return this.http.get("http://localhost:8080/viewSecurity")
  }
  deleteSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteSecurity",data)
  }
  searchSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/searchSecurity",data)
  }
  editSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/editSecurity",data)
  }
}
