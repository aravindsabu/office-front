import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent implements OnInit {

  constructor(private api:ApiService) { }
  security_code=""
  security_name=""
  address=""
  phone_number=""
  dateofjoin=""
  username=""
  password=""
  readValues=()=>{
    let data={
      "security_code":this.security_code,
      "security_name":this.security_name,
      "address":this.address,
      "phone_number":this.phone_number,
      "dateofjoin":this.dateofjoin,
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    this.api.addSecurity(data).subscribe(
      (data)=>{
        alert("data insert successfully")
      }
    )
  }

  ngOnInit(): void {
  }

}
