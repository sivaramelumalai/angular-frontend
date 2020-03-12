import { Component, OnInit } from '@angular/core';
import { UsersActionService } from '../users-action.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile:any ;
  public id  = localStorage.getItem('user_id')

  constructor(private useraction:UsersActionService) { }

  ngOnInit(){
    this.useraction.getUserProfile(this.id).subscribe((data: any[])=>{
      console.log(data)
      this.profile = data;
      console.log(this.profile)
    })
  }

}
