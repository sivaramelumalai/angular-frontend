import { Component, OnInit } from '@angular/core';
import { UsersActionService } from '../users-action.service'

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  public otp :any
  public flag :any
  public id  = localStorage.getItem('user_id')
  public empty = {}

  constructor(private usersaction:UsersActionService) { }

  ngOnInit() {
    this.usersaction.getOtp(this.id,this.empty).subscribe((data:any[])=>{console.log(data)})
  }
  otpverify(){
    this.usersaction.verifyOtp(this.id,this.empty).subscribe((data :any[])=>{this.flag=data })
  }

}
