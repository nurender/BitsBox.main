import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,     private http:HttpClient) { }
  onSubmit(value){
    console.log(value);
  }
  myfun(value){
    console.log(value);
    this.router.navigate(['home/alert']);
    this.http.get('http://localhost:3029/api/login',
    // {
    // name:value.name,
    // lastname:value.lname,
    // userid:value.username,
    // password:value.password
    // }
  ).subscribe((res)=>{
    console.log(res);
    
  })
  }
  signin(){
    this.router.navigate(['signup']);
  }

  ngOnInit() {
  }

}
