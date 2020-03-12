import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public userRegisterData = {name:'',email:'',phone_no:'',password:'',account_preferences:''}

  private urd = JSON.stringify(this.userRegisterData) 

  constructor(private _auth :AuthService,
    private _router:Router) { }

  ngOnInit(): void {

  }
  createUser(){
    console.log(JSON.stringify(this.userRegisterData))
    this._auth.createUser(JSON.stringify(this.userRegisterData))
    .subscribe(res=>{
      console.log(res)
      this._router.navigate(['/login'])
    }
      ,err=>console.log(err))
  
  }

}
