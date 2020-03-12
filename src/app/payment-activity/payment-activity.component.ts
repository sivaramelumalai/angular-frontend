import { Component, OnInit } from '@angular/core';
import { UsersActionService } from '../users-action.service'

@Component({
  selector: 'app-payment-activity',
  templateUrl: './payment-activity.component.html',
  styleUrls: ['./payment-activity.component.css']
})
export class PaymentActivityComponent implements OnInit {
  public payments :any
  public searchtext:any
  public profile :any
  public id = localStorage.getItem('user_id')

  constructor(private useractions:UsersActionService) { }

  ngOnInit() {
    this.useractions.getUserPayments(this.id).subscribe((data:any[])=>{
      this.payments = data
      console.log(data)
    })
    this.useractions.getUserProfile(this.id).subscribe((data:any[])=>{
      this.profile = data
    })
  }

}
