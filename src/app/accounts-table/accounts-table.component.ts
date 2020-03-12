import { Component, OnInit } from '@angular/core';
import { UsersActionService } from '../users-action.service'

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css']
})
export class AccountsTableComponent implements OnInit {
  public accounts;
  public userId = localStorage.getItem('user_id')

  constructor(private useraction:UsersActionService) { }

  ngOnInit(){
    this.useraction.getUserAccounts(this.userId).subscribe((data: any[])=>{
      console.log(data)
      console.log(this.userId)
      this.accounts = data;
    })
  }

}
