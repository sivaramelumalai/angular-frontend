import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { UsersActionService } from '../users-action.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private userrole  = {role:''}

  constructor(public _auth:AuthService,private useractions:UsersActionService) { }

  ngOnInit() {
   this.userrole.role =  localStorage.getItem('role')
   console.log("roleee",this.userrole)
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
