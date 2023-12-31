import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Trusting Partner"
  accnum="Account Number Please"
  acno=""
  pass=""
  //database

  /*database:any = {
    1000:{acno:1000,uname:"Alen",password:1000,balance:5000},
    1001:{acno:1001,uname:"Edwin",password:1001,balance:6000},
    1002:{acno:1002,uname:"Eric",password:1002,balance:7000}
  }*/

   // registration form model
   loginForm = this.fb.group ({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  acnoChange(event:any) {
    this.acno=event.target.value
    console.log(this.acno)
  }

  passwordChange(event:any) {
    this.pass=event.target.value
    console.log(this.pass)
  }

  // login() {
  //   //alert("Login clicked!!")
  //   var acno = this.acno
  //   var pswd = this.pass

  //   let database = this.database
    
  //   if(acno in database) {
  //     if (pswd == database[acno]["password"]) {
  //       alert("Login Sucessfully !!")
  //     } 
  //     else {
  //       alert("Invalid Password")
  //     }
  //   } 
  //   else {
  //       alert("User doesnot exist!!!!!")
  //   }
  // }

  //login using template referencing variable

  // login(a:any,p:any) {

  //   console.log(a.value)

  //   //alert("Login clicked!!")
  //   var acno = a.value
  //   var pswd = p.value

  //   let database = this.database
    
  //   if(acno in database) {
  //     if (pswd == database[acno]["password"]) {
  //       alert("Login Sucessfully !!")
  //     } 
  //     else {
  //       alert("Invalid Password")
  //     }
  //   } 
  //   else {
  //       alert("User doesnot exist!!!!!")
  //   }
  // }


  //login using two way ngmodel

  login() {
      //alert("Login clicked!!")
      var acno = this.loginForm.value.acno
      var pswd = this.loginForm.value.pswd
  
      /*let database = this.ds.database
      
      if(acno in database) {
        if (pswd == database[acno]["password"]) {
          alert("Login Sucessfully !!")
          this.router.navigateByUrl("dashboard")
        } 
        else {
          alert("Invalid Password")
        }
      } 
      else {
          alert("User doesnot exist!!!!!")
      }*/
      if(this.loginForm.valid) {
        const result = this.ds.login(acno,pswd)
        if(result) {
          alert("login successfully")
          this.router.navigateByUrl("dashboard")
        }
      } else {
        alert("Invalid form")
      }
    }

}
