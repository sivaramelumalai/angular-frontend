import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { UsersActionService } from '../users-action.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userCredentials = {email:'',password:''}

  constructor(private _auth :AuthService,
    private _router :Router,private useractions:UsersActionService) { }

  ngOnInit(): void {
    // this.useractions.getUserRole().subscribe((data: any)=>{
    //   console.log(data.user_id)
    //   // this.userrole = data
    //   localStorage.setItem('user_id', data.id)
    // })
  }
  loginUser(){
    console.log(JSON.stringify(this.userCredentials))
    this._auth.loginUser(JSON.stringify(this.userCredentials))
    .subscribe(res=>{
      console.log(res)
      localStorage.setItem('token', res.token)
      this.useractions.getUserRole().subscribe((data: any)=>{
        console.log( "role",data)
        // this.userrole = data
        localStorage.setItem('user_id', data.id)
        localStorage.setItem('role',data.role)
      })
      this._router.navigate(['/summary'])
    },err=>console.log(err))
  }
}
