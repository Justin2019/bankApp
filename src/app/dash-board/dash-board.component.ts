import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  user:any
  acno:any

  /*acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""*/


  // deposit form model
  depositForm = this.fb.group ({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })


  // deposit form model
  withdrawForm = this.fb.group ({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  loginDate:any

  constructor(private ds:DataService,private fb:FormBuilder) {
      this.user= this.ds.currentUser
      this.loginDate = new Date()
  }

  ngOnInit(): void {
  }

  deposit() {

    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount
    if(this.depositForm.valid) {
      const result = this.ds.deposit(acno,pswd,amount)
      if(result) {
        alert(amount + "succesfully deposited .. and balance is "+ result)
      }
    } else {
      alert("Invalid Deposit")
    }

    //alert("Amount deposited")
  }

  withdraw() {
    //alert("Amount withdrawed")
    var acno = this.depositForm.value.acno1
    var pswd = this.depositForm.value.pswd1
    var amount = this.depositForm.value.amount1
    if(this.withdrawForm.valid) {
      const result = this.ds.withdraw(acno,pswd,amount)
      if(result) {
        alert(amount + "succesfully debitted .. and balance is "+ result)
      }
    } else {
      alert("Invalid withdraw")
    }
  }

  //deleteFromParent
  deleteFromParent() {
    
  }

}
