import { Component, OnInit } from '@angular/core';
import { UsersActionService } from '../users-action.service'


@Component({
  selector: 'app-account-activity',
  templateUrl: './account-activity.component.html',
  styleUrls: ['./account-activity.component.css']
})
export class AccountActivityComponent implements OnInit {
  public userTransactions :any;
  public accounts : any;
  public userId = localStorage.getItem('user_id')
  public checked :any
  public sring = "sivaram"

  constructor(private userAction:UsersActionService) { }

  ngOnInit(){
    this.userAction.getUserAccounts(this.userId).subscribe((data: any[])=>{
      console.log("acc ac",data)
      console.log(this.userId)
      this.accounts = data;
    })
    this.userAction.getUserTransactions(this.userId).subscribe((data: any)=>{
      console.log(data)
      this.userTransactions = data
      console.log(this.userTransactions.to_acc_no)
      })
  }
  check(){
    if (this.userTransactions.to_acc_no === this.accounts.account_no){
      console.log(this.userTransactions.account_no)
      console.log(this.accounts.account_no)
      return true
    }else{
      return false
    }
    
  }

}
