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
}
