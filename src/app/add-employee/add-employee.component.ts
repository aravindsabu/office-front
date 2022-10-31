import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private api:ApiService) { }
  employee_id=""
  employee_name=""
  employee_address=""
  emp_dob=""
  emp_dateofjoin=""
  emp_email=""
  username=""
  password=""
  readvalues=()=>{
    let data={
      "employee_id":this.employee_id,
      "employee_name":this.employee_name,
      "employee_address":this.employee_address,
      "emp_dob":this.emp_dob,
      "emp_dateofjoin":this.emp_dateofjoin,
      "emp_email":this.emp_email,
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    this.api.addemployee(data).subscribe(
      (data)=>{
        alert("data insert successfully")

      }
    )
    
   
  }
  

  ngOnInit(): void {
  }

}
