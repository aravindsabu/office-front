import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-security',
  templateUrl: './search-security.component.html',
  styleUrls: ['./search-security.component.css']
})
export class SearchSecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  security_code=""
  readValue=()=>{
    let data={
      "security_code":this.security_code
    }
    console.log(data)
    this.myapi.searchSecurity(data).subscribe(
      (data)=>{
        this.data=data
      }
    )
  }
  editSecurity=()=>{
    this.myapi.editSecurity(this.data[0]).subscribe(
      (res)=>{
        alert("success")
      }
    )
  }
  data:any=[]

  ngOnInit(): void {
  }

}
