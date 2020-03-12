import { Component, OnInit } from '@angular/core';
import { UsersActionService } from '../users-action.service'
import { BankerViewService} from '../banker-view.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-accounts',
  templateUrl: './pending-accounts.component.html',
  styleUrls: ['./pending-accounts.component.css']
})
export class PendingAccountsComponent implements OnInit {
  public accounts:any
  public create: any
  public accountDet={id:"",acc_no:"",type:"",roi:"",amount:""}

  constructor(private useraction:UsersActionService, private account:BankerViewService,private router:Router) { }

  ngOnInit(){
    this.useraction.getPendingAccounts().subscribe((data : any[])=>{
      this.accounts = data
      console.log("pending",data)
    })
  }

  createAccount(){
    console.log(JSON.stringify(this.accountDet))
    this.account.createAccount(JSON.stringify(this.accountDet)).subscribe(res=>{
      console.log(res)
    }
      ,err=>console.log(err))
      this.accountDet={id:"",acc_no:"",type:"",roi:"",amount:""}
      this.router.navigate(['/pending-accounts'])

  }



}
