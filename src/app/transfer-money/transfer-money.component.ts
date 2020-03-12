import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service'
import { Router } from '@angular/router'
import { UsersActionService} from '../users-action.service'

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {
  public id  = localStorage.getItem('user_id')
  public empty = {}
  private date: Date = new Date() 
  public show = false
  public modal = false
  public accounts :any
  f_acc_noHasError = true;
  errorMsg :any;
  submitted: any;
  public impsTransactionDet = {
                              f_acc_no:'default',
                              T_acc_no:'',
                              amount:'',otp:''}

  constructor(private transaction:TransactionsService,private _router:Router,
                      private usersaction:UsersActionService) { }

  ngOnInit(){
    this.usersaction.getUserAccounts(this.id).subscribe((data: any[])=>{
      console.log(data)
      console.log(this.id)
      this.accounts = data;
    })
  }
  validateFromAcc(value) {
    if (value === 'default') {
      this.f_acc_noHasError = true;
    } else {
      this.f_acc_noHasError = false;
    }
  }
  impsTransfer(){
    console.log(JSON.stringify(this.impsTransactionDet))
    this.transaction.impsTransaction(JSON.stringify(this.impsTransactionDet))
    .subscribe(res=>{
    }
    ,err=>{ this.errorMsg = err
    console.log(err) })
    this.show = false
    this.modal = true
    this.impsTransactionDet = {f_acc_no:'',T_acc_no:'',amount:'',otp:''}
  }
  otpGen(){
    this.show = true
    this.usersaction.getOtp(this.id,this.empty).subscribe((data:any[])=>{console.log(data)})
  }
}
