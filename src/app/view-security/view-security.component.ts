import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-security',
  templateUrl: './view-security.component.html',
  styleUrls: ['./view-security.component.css']
})
export class ViewSecurityComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
     this.myapi.viewSecurity().subscribe(
      (data)=>{
        this.book=data
      }
     )
   }
   deleteSecurity=(security_code:any)=>{
     let data={
      "security_code":security_code
     }
     this.myapi.deleteSecurity(data).subscribe(
      (resp)=>{
        alert("delete")
      }
      
     )
     this.fetchData()
   }
 
  book:any=[]
  ngOnInit(): void {
  }

}
