import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any

  database:any = {
    1000:{acno:1000,uname:"Alen",password:1000,balance:5000},
    1001:{acno:1001,uname:"Edwin",password:1001,balance:6000},
    1002:{acno:1002,uname:"Eric",password:1002,balance:7000}
  }

  constructor() { }

  // register component
  register(uname:any,acno:any,password:any) {
    let database = this.database

    if(acno in database) {

      
      return false
      // user already exist
    } else {
      database[acno]= {
        acno,
        uname,
        password,
        balance:0
      }
      console.log(database)
      return true
    }
  }

  //login
  login(acno:any,pswd:any) {
    let  database = this.database

    if(acno in database) {
      if(pswd== database[acno]["password"]) {
        this.currentUser= database[acno]["uname"]
        return true
      }
      else {
        alert("Incorrect pass")
        return false
      }
    }
    else {
      alert("user does not exist")
      return false
    }
  }

  //deposit
  deposit(acno:any,pswd:any,amt:any){

    var amount = parseInt(amt)
    let database = this.database

    if(acno in database) {
      if(pswd==database[acno]["password"]) {
        database[acno]["balance"] +=amount
        return database[acno]["balance"]
      }
      else {
        alert("Incorrect Password!!!")
        return false
      }
    } else {
      alert("user does not exist !!!")
      return false
    }
    
  }


  //deposit
  withdraw(acno:any,pswd:any,amt:any){

    var amount = parseInt(amt)
    let database = this.database

    if(acno in database) {
      if(pswd==database[acno]["password"]) {
        if(database[acno]["balance"]>amount) {
          database[acno]["balance"] -=amount
          return database[acno]["balance"]
        }else {
          alert("Insufficient balance !!!")
        return false
        }
      }
      else {
        alert("Incorrect Password!!!")
        return false
      }
    } else {
      alert("user does not exist !!!")
      return false
    }
    
  }

}
