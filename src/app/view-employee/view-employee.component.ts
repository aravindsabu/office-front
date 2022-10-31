import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewEmploye().subscribe(
      (data)=>{
        this.root=data
      }
    )
   }
   deleteEmployee=(employee_id:any)=>{
    let data={
      "employee_id":employee_id

    }
    this.myapi.deleteEmployee(data).subscribe(
      (resp)=>{
        alert("delete")
      }
    )
    this.fetchData()
   }
   root:any=[]


  ngOnInit(): void {
  }

}
