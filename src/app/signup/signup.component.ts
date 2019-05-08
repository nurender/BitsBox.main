import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  myfun(value){
    this.http.post('http://localhost:3029/api/user',
    {
    name:value.name,
    lastname:value.lname,
    userid:value.username,
    password:value.password
    }
  ).subscribe((res)=>{
    console.log(res);
    
  })
    
  }

  ngOnInit() {
  //   this.http.post('http://localhost:3029/api/user',
  //   {
  //   name:'Nurender',
  //   lastnam:'kldnfvd',
  //   userid:'fjkdsnckj',
  //   password:"jkfdknkjnd"
  //   }
  // ).subscribe((res)=>{
  //   console.log(res);
    
  // })

  // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(result =>console.log(result)
  // )
  }
// myfun(name){
//   console.log(name);
// }


}
