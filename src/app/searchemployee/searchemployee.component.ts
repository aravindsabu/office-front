import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  employee_id=""
  readValue=()=>{
    let data={
      "employee_id":this.employee_id
    }
    console.log(data)
    this.myapi.searchEmployee(data).subscribe(
      (data)=>{
        this.data=data
      }
    )
  }
  editEmployee=()=>{
    this.myapi.editEmployee(this.data[0]).subscribe(
      (res)=>{
        alert("success")
      }
    )
  }
  data:any=[]

  ngOnInit(): void {
  }

}
