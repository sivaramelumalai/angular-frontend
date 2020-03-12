import { Component, OnInit } from '@angular/core';
import { UsersActionService } from '../users-action.service'

@Component({
  selector: 'app-summary-tab',
  templateUrl: './summary-tab.component.html',
  styleUrls: ['./summary-tab.component.css']
})
export class SummaryTabComponent implements OnInit {
  userrole = {role:""}

  constructor(private useractions:UsersActionService) { }

  ngOnInit() {
    this.useractions.getUserRole().subscribe((data: any)=>{
      console.log(data.role)
      this.userrole = data
    })
  }
  checkCustomer(){
    if('customer' == this.userrole.role){
      return true
    }
  }
  checkBanker(){
    if('banker' == this.userrole.role){
      return true
    }

  }

}
